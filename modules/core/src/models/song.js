export default class Song {
  constructor({
    googleDriveId, songName, localDownloadUri,
  }) {
    this.googleDriveId = googleDriveId;
    this.googleDriveUrl = `https://www.googleapis.com/drive/v3/files/${googleDriveId}?alt=media?fields=fileExtension%2CfullFileExtension`;
    this.songName = songName;
    this.localDownloadUri = localDownloadUri;
    this.songLength = null;
  }
}
