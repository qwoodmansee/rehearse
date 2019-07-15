export default class Song {
  constructor({
    googleDriveId, googleDriveUrl, songName, localDownloadUri,
  }) {
    this.googleDriveId = googleDriveId;
    this.googleDriveUrl = googleDriveUrl;
    this.songName = songName;
    this.localDownloadUri = localDownloadUri;
    this.songLength = 0;
  }
}
