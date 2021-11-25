import { createTheme } from "@fluentui/style-utilities";


const myTheme = createTheme({
    palette: {
      themePrimary: '#4d8eff',
      themeLighterAlt: '#03060a',
      themeLighter: '#0c1729',
      themeLight: '#172b4d',
      themeTertiary: '#2e5599',
      themeSecondary: '#437de0',
      themeDarkAlt: '#5e99ff',
      themeDark: '#77a9ff',
      themeDarker: '#9bc0ff',
      neutralLighterAlt: '#2b2b2b',
      neutralLighter: '#333333',
      neutralLight: '#414141',
      neutralQuaternaryAlt: '#4a4a4a',
      neutralQuaternary: '#515151',
      neutralTertiaryAlt: '#6f6f6f',
      neutralTertiary: '#c8c8c8',
      neutralSecondary: '#d0d0d0',
      neutralPrimaryAlt: '#dadada',
      neutralPrimary: '#ffffff',
      neutralDark: '#f4f4f4',
      black: '#f8f8f8',
      white: '#212121',
    }});

export default createTheme(myTheme);