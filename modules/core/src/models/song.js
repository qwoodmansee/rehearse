export default class Song {
  constructor({ googleDriveUrl }) {
    this.googleDriveUrl = googleDriveUrl;
    this.songName = this._determineSongName({
      googleDriveUrl,
    });
    this.songLength = 120;
  }

  _determineSongName({ googleDriveUrl }) {
    return googleDriveUrl;
  }
}
