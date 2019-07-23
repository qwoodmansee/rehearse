import { Audio } from 'expo-av';

export default class AudioPlayer {
  constructor(song) {
    this.song = song;
    this.playbackObject = new Audio.Sound();
    this.loadAudioFile();
    this.currentRatePercentage = 100;
  }

  async currentPlaybackPercentage() {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    return currentPlayStatus.positionMillis / currentPlayStatus.durationMillis * 100;
  }

  async setPlaybackStatusUpdate(playbackStatusCallback) {
    this.playbackObject.setOnPlaybackStatusUpdate(null);
    await this.playbackObject.setOnPlaybackStatusUpdate(playbackStatusCallback);
  }

  async loadAudioFile() {
    await this.playbackObject.unloadAsync();

    await this.playbackObject.loadAsync({
      uri: this.song.localDownloadUri,
    }, {
      shouldPlay: true,
      progressUpdateIntervalMillis: 50,
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

  async setPosition(value) {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.playbackObject.setPositionAsync(value);
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

  async playFromPracticePoint(pointName) {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.playbackObject.playFromPositionAsync(this.song.practiceSession[pointName]);
  }

  async setPracticePoint(pointName) {
    const currentPlayStatus = await this.playbackObject.getStatusAsync();
    if (!currentPlayStatus.isLoaded) { await this.loadAudioFile(); }
    this.song.practiceSession[pointName] = currentPlayStatus.positionMillis;
  }
}
