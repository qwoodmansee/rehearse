import Song from '@core/src/models/song';
import { documentDirectory, downloadAsync, getInfoAsync } from 'expo-file-system';
import { getItemAsync } from 'expo-secure-store';

export async function GetSongs(googleDriveURL) {
  const songFolderId = getQueryVariable({
    variable: 'id',
    url: googleDriveURL,
  });

  const accessToken = await getItemAsync('google-access-token');
  if (accessToken) {
    try {
      const songs = await getSongMetadata(songFolderId, accessToken);
      await downloadSongs(songs, accessToken);
      return Promise.resolve(songs);
    } catch (err) {
      throw new Error('error downloading songs from google drive!', err);
    }
  } else {
    throw new Error('cant communicate with Google Drive if not logged in!');
  }
}

const getSongMetadata = async (songFolderId, accessToken) => {
  const options = configureGetOptions(accessToken);
  const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${songFolderId}'+in+parents`, options);

  if (response.status === 200) {
    const data = await response.json();
    const songs = data.files.filter((songMeta) => songMeta.mimeType.startsWith('audio/')).map((songMeta) => {
      return new Song({
        songName: songMeta.name,
        googleDriveId: songMeta.id,
        localDownloadUri: `${documentDirectory}${songMeta.id}`,
      });
    });
    return Promise.resolve(songs);
  }
};

const downloadSongs = async (songs, accessToken) => {
  const options = configureGetOptions(accessToken);
  songs.forEach(async (song) => {
    if (song.localDownloadUri) {
      const existingFileData = await getInfoAsync(song.localDownloadUri);
      if (existingFileData.exists && existingFileData.size > 0) {
        return;
      }
    }
    await downloadAsync(song.googleDriveUrl, song.localDownloadUri, options);
  });
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

const configureGetOptions = (accessToken) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);
  return {
    method: 'GET',
    headers,
  };
};
