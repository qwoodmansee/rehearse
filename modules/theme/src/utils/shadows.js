import Colors from '@root/brand/src/utils/colors';

export default class Shadows {
  static normal() {
    return {
      boxShadow: `0px 18px 10px -8px ${Colors.blackShadow()}`,
      transition: 'all 300ms ease-out',
    };
  }

  static sidesAndBottom() {
    return {
      boxShadow: `0px 16px 30px ${Colors.blackShadow()}`,
    };
  }

  static top() {
    return {
      boxShadow: `0px -18px 15px 0px ${Colors.shadow(0.15)}`,
    };
  }

  static none() {
    return {
      boxShadow: '',
    };
  }

  static modal() {
    return {
      boxShadow: `
        0px 16px 30px ${Colors.blackShadow()},
        0px 0px 8px ${Colors.blackShadow()}
      `,
    };
  }

  static modalDark() {
    return {
      boxShadow: `0px 20px 30px ${Colors.shadow(0.77)}`,
    };
  }

  static sliderHandle() {
    return {
      boxShadow: `0px 6px 12px 1px ${Colors.blackShadow()}`,
    };
  }

  static socialButton() {
    return {
      boxShadow: `0px 8px 22px ${Colors.shadow(0.2)}, 0px 10px 10px ${Colors.blackShadow()}`,
    };
  }

  static modalButton() {
    return {
      boxShadow: `0px 22px 22px ${Colors.shadow(0.2)}, 0px 19px 10px ${Colors.shadow(0.3)}`,
    };
  }
}
