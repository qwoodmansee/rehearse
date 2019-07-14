import BackToPoint from '@player/assets/back-to-point.png';
import MetronomeDown from '@player/assets/metronome-down.png';
import MetronomeUp from '@player/assets/metronome-up.png';
import PlayerControl from '@player/src/models/player-control';

const icons = [BackToPoint, MetronomeDown, MetronomeUp];

const RandomIcon = () => icons[Math.floor(Math.random() * icons.length)];

export function RandomPlayerControlList(numControls) {
  return [...Array(numControls)].map(() => new PlayerControl({
    icon: RandomIcon(),
    controlFn: () => {},
  }));
}
