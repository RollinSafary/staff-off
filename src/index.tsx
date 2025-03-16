import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux-store/store';
import './i18n';
import AppRouter from './router';
import { ThemeProvider } from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </Provider>
);
