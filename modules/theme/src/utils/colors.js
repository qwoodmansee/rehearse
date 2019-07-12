export default class Colors {
  static black() {
    return '#000000';
  }

  static balticSea() {
    return '#2B292D';
  }

  static frenchGray() {
    return '#b5b4b6';
  }

  static alabaster() {
    return '#fbfbfb';
  }

  static gray() {
    return '#dedede';
  }

  static grayMiddle() {
    return '#808080';
  }

  static grayDark() {
    return '#606060';
  }

  static grayDarkest() {
    return '#404040';
  }

  static disabledGray() {
    return '#b5b4b6';
  }

  static mantisGreen() {
    return '#72cf61';
  }

  static mexiRedLight() {
    return '#F5EBED';
  }

  static mexiRed() {
    return '#9e3a46';
  }

  static backgroundPurple() {
    return '#311c3a';
  }

  static rootOrange() {
    return '#ff5715';
  }

  static calypsoBlueGradient() {
    return ['#448DAD', '#266284'];
  }

  static camelotStilettoGradient() {
    return ['#7D3557', '#9E3A46'];
  }

  static finnSolidPinkGradient() {
    return ['#642B46', '#7F2F39'];
  }

  static aqua() {
    return 'rgba(222, 241, 242, 0.5)';
  }

  static seafoam() {
    return '#72cac8';
  }

  static shark(opacity = 1.0) {
    return `rgba(29,29,33, ${opacity})`; // #1d1d21
  }

  static darkSeafoam() {
    return '#299C99';
  }

  static lightSeafoam() {
    return 'rgba(41, 156, 153, 0.1)';
  }

  static white() {
    return '#ffffff';
  }

  static transparentWhite() {
    return 'rgb(255, 255, 255, 0.8)';
  }

  static ming() {
    return '#366181';
  }

  static halfBakedGradient() {
    return ['rgba(122, 198, 196, 0.0001)', 'rgba(122, 198, 196, 1)'];
  }

  static purpleBlueGradient() {
    return ['#7c5e93', '#366181'];
  }

  static darkLavenderGradient() {
    return ['rgba(124, 94, 147, 0.75)', 'rgba(124, 94, 147, 0.0001)'];
  }

  static sunglowGradient() {
    return ['#FABE51', this.rootOrange()];
  }

  static purpleRainGradient() {
    return [this.rootOrange(), '#7C5E93'];
  }

  static blueSteelGradient() {
    return ['#7C5E93', '#266284'];
  }

  static grayLightest() {
    return '#ededed';
  }

  static transparent() {
    return 'rgba(0, 0, 0, 0)';
  }

  static shadow(opacity) {
    return `rgba(0, 0, 0, ${opacity})`;
  }

  static blackShadow() {
    return this.shadow(0.1);
  }

  static overlayShadow() {
    return this.shadow(0.4);
  }

  static facebookBlue() {
    return '#4267B2';
  }

  static overlayShadowDark() {
    return 'rgba(64, 64, 64, 0.8)';
  }

  static hippieBlueGradient() {
    return ['rgba(68, 157, 155, 1) 15%', 'rgba(68, 175, 132, 1) 85%'];
  }

  static seafoamBlueGradient() {
    return [this.seafoam(), this.mantisGreen()];
  }

  static bonJour() {
    return '#E0DFE0';
  }

  static gallery() {
    return '#ECECEC';
  }

  static deluge() {
    return '#7C5E93';
  }
}
