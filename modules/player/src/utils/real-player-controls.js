import BackToPoint from '@player/assets/back-to-point.png';
import MetronomeDown from '@player/assets/metronome-down.png';
import MetronomeUp from '@player/assets/metronome-up.png';
import Pause from '@player/assets/pause.png';
import Play from '@player/assets/play.png';
import PlayerControl from '@player/src/models/player-control';
import Restart from '@player/assets/restart.png';
import Stop from '@player/assets/stop.png';

export default function RealPlayerControls(audioPlayer) {
  return [
    new PlayerControl({
      icon: null,
      text: 'A',
      controlFn: () => audioPlayer.playFromPracticePoint('A'),
    }),
    new PlayerControl({
      icon: null,
      text: 'B',
      controlFn: () => audioPlayer.playFromPracticePoint('B'),
    }),
    new PlayerControl({
      icon: null,
      text: 'C',
      controlFn: () => audioPlayer.playFromPracticePoint('C'),
    }),
    new PlayerControl({
      icon: null,
      text: 'D',
      controlFn: () => audioPlayer.playFromPracticePoint('D'),
    }),
    new PlayerControl({
      icon: Play,
      controlFn: () => audioPlayer.play(),
    }),
    new PlayerControl({
      icon: Pause,
      controlFn: () => audioPlayer.pause(),
    }),
    new PlayerControl({
      icon: Stop,
      controlFn: () => audioPlayer.stop(),
    }),
    new PlayerControl({
      icon: Restart,
      controlFn: () => audioPlayer.playFromStart(),
    }),
    new PlayerControl({
      icon: BackToPoint,
      controlFn: () => audioPlayer.play(),
    }),
    new PlayerControl({
      icon: MetronomeUp,
      controlFn: () => audioPlayer.speedUpPercent(5),
    }),
    new PlayerControl({
      icon: MetronomeDown,
      controlFn: () => audioPlayer.slowDownPercent(5),
    }),
    new PlayerControl({
      icon: null,
      text: 'SET',
      controlFn: () => audioPlayer.play(),
    }),
  ];
}
