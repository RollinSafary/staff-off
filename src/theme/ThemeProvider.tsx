import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-store/store';
import { darkTheme, lightTheme } from './index';
import { CssBaseline, GlobalStyles } from '@mui/material';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get theme from Redux store
  const themeMode = useSelector((state: RootState) => state.ui.themeMode);

  // Select the appropriate theme
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  // Add global styles to ensure transitions work properly
  const globalStyles = {
    '*, *::before, *::after': {
      transition:
        'background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease !important',
    },
    // Make sure MUI components also transition properly
    '.MuiPaper-root, .MuiAppBar-root, .MuiButton-root, .MuiIconButton-root, .MuiCard-root': {
      transition:
        'background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease !important',
    },
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </MuiThemeProvider>
  );
};
