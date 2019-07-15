export default class PlayerControl {
  constructor({
    icon, controlFn, text = '',
  }) {
    this.icon = icon;
    this.controlFn = controlFn;
    this.text = text;
  }
}
