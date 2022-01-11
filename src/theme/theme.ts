import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'lightBlue.200'
      }
    }
  },
  colors: {
    lightBlue: {
      50: '#e3f4ff',
      100: '#c1dbf0',
      200: '#9dc3e2',
      300: '#78abd5',
      400: '#5393c7',
      500: '#3a7aaf',
      600: '#2c5f88',
      700: '#1d4462',
      800: '#0e293d',
      900: '#000f1a'
    }
  }
});

export default theme;
