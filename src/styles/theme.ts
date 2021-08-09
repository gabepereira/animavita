import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    // Business colors
    primaryDarkest: '#0F1633FF',
    primaryDark: '#16204BFF',
    primary: '#273983FF',
    primaryLight: '#4961C8FF',
    primaryLightest: '#CCD3F5FF',
    secondaryDarkest: '#133438FF',
    secondaryDark: '#1C4C52FF',
    secondary: '#32848FFF',
    secondaryLight: '#69BFCBFF',
    secondaryLightest: '#BDE3E8FF',

    // System colors
    systemInformation: '#0A6ABFFF',
    systemSuccess: '#005A38FF',
    systemError: '#C2101BFF',
    systemWarning: '#F2B705FF',
  },
  shadow: {
    level1: '0px 4px 8px rgba(27,28,29,0.08)',
    level2: '0px 8px 24px rgba(27,28,29,0.08)',
    level3: '0px 16px 32px rgba(27,28,29,0.08)',
    level4: '0px 16px 48px rgba(27,28,29,0.08)',
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
};

export { theme };
