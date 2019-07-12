import Colors from '@root/brand/src/utils/colors';

export default class Theme {
  static title1() {
    return {
      fontSize: 32,
      lineHeight: '38px',
      color: Colors.black(),
    };
  }

  static title2() {
    return {
      fontSize: 26,
      lineHeight: '30px',
      color: Colors.black(),
    };
  }

  static title3() {
    return {
      fontSize: 22,
      lineHeight: '26px',
      color: Colors.black(),
    };
  }

  static title3NonResponsive() {
    return {
      fontSize: 22,
      lineHeight: '26px',
      color: Colors.black(),
    };
  }

  static bigTitle() {
    return {
      fontSize: 44,
      lineHeight: '46px',
      color: Colors.black(),
    };
  }

  static content() {
    return {
      fontSize: 19,
      lineHeight: '22px',
      color: Colors.grayDark(),
    };
  }

  static bodyRegular() {
    return {
      fontSize: 17,
      lineHeight: '24px',
      color: Colors.grayMiddle(),
    };
  }

  static bodyRegularBold() {
    return {
      ...Theme.bodyRegular(),
      ...RootSans.semiBold(),
      color: Colors.black(),
    };
  }

  static bodyTiny() {
    return {
      fontSize: 12,
      lineHeight: '15px',
      color: Colors.grayMiddle(),
    };
  }

  static bodySmall() {
    return {
      fontSize: 15,
      lineHeight: '20px',
      color: Colors.grayMiddle(),
    };
  }

  static bodyLarge() {
    return {
      fontSize: '19px',
      lineHeight: '26px',
      color: Colors.grayMiddle(),
    };
  }

  static captionTitle() {
    return {
      ...Theme.bodyLarge(),
      color: Colors.mexiRed(),
      fontSize: '17px',
      lineHeight: '24px',
    };
  }

  static caption() {
    return {
      color: Colors.mexiRed(),
      lineHeight: '18px',
      fontSize: '13px',
    };
  }

  static button() {
    return {
      fontSize: 19,
      lineHeight: '22px',
      color: Colors.white(),
    };
  }

  static link() {
    return {
      lineHeight: '24px',
      fontSize: '17px',
      color: Colors.seafoam(),
    };
  }

  static secondaryButton() {
    return {
      fontSize: 16,
      lineHeight: '19px',
      color: Colors.white(),
    };
  }
}
