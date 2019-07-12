export default class Gradients {
  static leftToRight(gradientColors) {
    return `linear-gradient(to right, ${gradientColors.join(', ')})`;
  }

  static topToBottom(gradientColors) {
    return `linear-gradient(to bottom, ${gradientColors.join(', ')})`;
  }

  static byDegrees(gradientColors, degrees) {
    return `linear-gradient(${degrees}deg, ${gradientColors.join(', ')})`;
  }
}
