import { AlertProps } from '@mui/material';

export type ThemeMode = 'light' | 'dark';

export interface ToastState {
  open: boolean;
  message: string;
  severity: AlertProps['severity'];
  autoHideDuration?: number;
}

export interface IUISliceState {
  isMenuOpen: boolean;
  activeDialog: string | null;
  toast: ToastState | null;
  themeMode: ThemeMode;
}
