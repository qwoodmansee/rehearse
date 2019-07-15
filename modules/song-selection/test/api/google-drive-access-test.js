import * as ExpoFileSystem from 'expo-file-system';
import * as ExpoSecureStore from 'expo-secure-store';
import * as ReactNative from 'react-native';
import Song from '@core/src/models/song';
import { GetSongs } from '@song-selection/src/api/google-drive-access';
import { fetchMock } from 'fetch-mock';

describe('GetSongs', () => {
  describe('when all is well, happy path', () => {
    let downloadAsyncCalled;
    beforeEach(() => {
      downloadAsyncCalled = false;
      global.Headers = () => ({
        append: () => {},
      });
      ReactNative.Headers = () => {};
      ExpoSecureStore.getItemAsync = () => 'some_access_token';
      ExpoFileSystem.getInfoAsync = () => {
        return {
          exists: false,
        };
      };
      ExpoFileSystem.downloadAsync = () => {
        downloadAsyncCalled = true;
      };
      ExpoFileSystem.documentDirectory = 'someDirectory/';

      fetchMock.getOnce(/drive\/v3\/files/, Promise.resolve({
        status: 200,
        files: [
          {
            name: 'some-song-name-1',
            id: 'some-song-id-1',
            mimeType: 'audio/x-wav',
          },
        ],
      }));
    });

    it('downloads all the audio files in the google drive and returns the songs', async () => {
      const result = await GetSongs('https://drive.google.com/open?id=some-drive-id');
      expect(downloadAsyncCalled).toEqual(true);
      expect(result.length).toEqual(1);
      expect(result[0]).toBeInstanceOf(Song);
      expect(result[0].name).toEqual('some-song-name-1');
      expect(result[0].id).toEqual('some-song-id-1');
      expect(result[0].localDownloadUri).toEqual('someDirectory/some-song-id-1');
    });
  });
});
