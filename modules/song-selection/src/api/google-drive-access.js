import Song from '@core/src/models/song';
import { createDownloadResumable, deleteAsync, documentDirectory, getInfoAsync, makeDirectoryAsync } from 'expo-file-system';
import { getItemAsync } from 'expo-secure-store';

export async function GetSongs(googleDriveURL) {
  const googleSongFolderId = getQueryVariable({
    variable: 'id',
    url: googleDriveURL,
  });

  const localSongsDirectoryInfo = await getInfoAsync(`${documentDirectory}songs/`);
  if (!localSongsDirectoryInfo.exists) { await makeDirectoryAsync(`${documentDirectory}songs/`); }

  const accessToken = await getItemAsync('google-access-token');
  if (accessToken) {
    // try {
    const songs = await getSongMetadata(googleSongFolderId, accessToken);
    await downloadSongs(songs, accessToken);
    return Promise.resolve(songs);
    // } catch (err) {
    //   throw new Error('error downloading songs from google drive!', err);
    // }
  } else {
    throw new Error('cant communicate with Google Drive if not logged in!');
  }
}

const getSongMetadata = async (songFolderId, accessToken) => {
  const options = configureGetOptions(accessToken);
  const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${songFolderId}'+in+parents`, options);
  if (response.status === 200) {
    const data = await response.json();
    const songs = await Promise.all(data.files.filter((songMeta) => songMeta.mimeType.startsWith('audio/')).map(async (songMeta) => {
      const googleDriveUrl = `https://www.googleapis.com/drive/v3/files/${songMeta.id}`;
      const fileExtension = await getSongFileExtension(googleDriveUrl, accessToken);
      return new Song({
        songName: songMeta.name,
        googleDriveId: songMeta.id,
        localDownloadUri: `${documentDirectory}songs/${songMeta.id}.${fileExtension}`,
        googleDriveUrl,
      });
    }));
    return Promise.resolve(songs);
  }
};

const downloadSongs = async (songs, accessToken) => {
  console.log('staring download');
  songs.forEach(async (song) => {
    if (song.localDownloadUri) {
      const existingFileData = await getInfoAsync(song.localDownloadUri);
      if (existingFileData.exists && existingFileData.size > 0) {
        // await deleteAsync(song.localDownloadUri);
        return;
      }
    }
    const logProgress = (downloadProgress) => {
      const progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;
      console.log(progress);
    };

    const resumable = createDownloadResumable(
      `${song.googleDriveUrl}?alt=media`,
      song.localDownloadUri,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      logProgress);
    try {
      await resumable.downloadAsync();
    } catch (e) {
      console.error(e);
    }
  });
  console.log('download done');
};

const getSongFileExtension = async (googleDriveUrl, accessToken) => {
  const options = configureGetOptions(accessToken);
  const response = await fetch(`${googleDriveUrl}?fields=fileExtension%2CfullFileExtension`, options);
  if (response.status === 200) {
    const data = await response.json();
    return data.fileExtension;
  }
};

const getQueryVariable = ({ variable, url }) => {
  const splitString = url.split('?');
  const paramString = splitString[1];
  const vars = paramString?.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return false;
};

const configureHeaders = (accessToken) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);
  return headers;
};

const configureGetOptions = (accessToken) => {
  const headers = configureHeaders(accessToken);
  return {
    method: 'GET',
    headers,
  };
};
