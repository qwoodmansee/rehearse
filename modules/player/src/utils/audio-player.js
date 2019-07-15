import { Audio } from 'expo-av';

export default class AudioPlayer {
  constructor(song) {
    this.song = song;
    this.playbackObject = new Audio.Sound();
    this.loadAudioFile();
    this.currentRatePercentage = 100;
  }

  async loadAudioFile() {
    await this.playbackObject.loadAsync({
      uri: this.song.localDownloadUri,
    }, {
      shouldPlay: true,
    });
  }

  async play() {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.playbackObject.playAsync();
  }

  async pause() {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.playbackObject.pauseAsync();
  }

  async stop() {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.playbackObject.stopAsync();
  }

  async playFromStart() {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.playbackObject.playFromPositionAsync(0);
  }

  async slowDownPercent(percent) {
    let currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    currentPlayStatus = await this.playbackObject.getStatusAsync();
    const currentRate = currentPlayStatus.rate;
    this.currentRatePercentage -= percent;
    this.playbackObject.setRateAsync(currentRate - currentRate * percent / 100, true, Audio.PitchCorrectionQuality.Medium);
  }

  async speedUpPercent(percent) {
    let currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    currentPlayStatus = await this.playbackObject.getStatusAsync();
    const currentRate = currentPlayStatus.rate;
    this.currentRatePercentage += percent;
    await this.playbackObject.setRateAsync(currentRate + currentRate * percent / 100, true, Audio.PitchCorrectionQuality.Medium);
  }
}
