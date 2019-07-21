export default class Song {
  constructor({
    googleDriveId, googleDriveUrl, songName, localDownloadUri,
  }) {
    this.googleDriveId = googleDriveId;
    this.googleDriveUrl = googleDriveUrl;
    this.songName = songName;
    this.localDownloadUri = localDownloadUri;
    this.songLength = 0;
    this.practiceSession = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };
  }
}
