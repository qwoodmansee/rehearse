import Song from '@core/src/models/song';
import uuid from 'uuid';

export function RandomSong() {
  const song = new Song({
    googleDriveUrl: uuid.v4(),
  });
  song.songLength = Math.floor(Math.random() * (300 - 30 + 1)) + 30;
  return song;
}
