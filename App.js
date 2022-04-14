import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Navigation from './Navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0C6157',
    accent: '	#FFFFFF',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}
