import Colors from '@theme/src/utils/colors';

export default class Theme {
  static title1() {
    return {
      fontSize: 32,
      lineHeight: 38,
      color: Colors.white(),
    };
  }

  static title2() {
    return {
      fontSize: 26,
      lineHeight: 30,
      color: Colors.white(),
    };
  }

  static title3() {
    return {
      fontSize: 22,
      lineHeight: 26,
      color: Colors.white(),
    };
  }

  static title3NonResponsive() {
    return {
      fontSize: 22,
      lineHeight: 26,
      color: Colors.white(),
    };
  }

  static bigTitle() {
    return {
      fontSize: 44,
      lineHeight: 46,
      color: Colors.white(),
    };
  }

  static content() {
    return {
      fontSize: 19,
      lineHeight: 22,
      color: Colors.white(),
    };
  }

  static bodyRegular() {
    return {
      fontSize: 17,
      lineHeight: 24,
      color: Colors.white(),
    };
  }

  static bodyTiny() {
    return {
      fontSize: 12,
      lineHeight: 15,
      color: Colors.white(),
    };
  }

  static bodySmall() {
    return {
      fontSize: 15,
      lineHeight: 20,
      color: Colors.white(),
    };
  }

  static bodyLarge() {
    return {
      fontSize: 19,
      lineHeight: 26,
      color: Colors.white(),
    };
  }

  static captionTitle() {
    return {
      ...Theme.bodyLarge(),
      color: Colors.white(),
      fontSize: 17,
      lineHeight: 24,
    };
  }

  static caption() {
    return {
      color: Colors.white(),
      lineHeight: 18,
      fontSize: 13,
    };
  }

  static button() {
    return {
      fontSize: 19,
      lineHeight: 22,
      color: Colors.white(),
    };
  }

  static link() {
    return {
      lineHeight: 24,
      fontSize: 17,
      color: Colors.seafoam(),
    };
  }

  static secondaryButton() {
    return {
      fontSize: 16,
      lineHeight: 19,
      color: Colors.white(),
    };
  }
}
