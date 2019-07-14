import { RandomSong } from '@song-selection/test/factories/song-factory';

export function RandomSongList(numSongs) {
  return [...Array(numSongs)].map(() => new RandomSong());
}
