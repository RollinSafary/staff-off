// Color palette definitions for light and dark modes
// Based on accessibility guidelines and eye comfort research

import { PaletteOptions } from '@mui/material';

// Common colors shared between modes
const common = {
  black: '#000000',
  white: '#ffffff',
};

// Define a shared primary color palette for both themes
const primaryColor = {
  main: '#8b5cf6', // Brighter purple from dark mode
  light: '#a78bfa',
  dark: '#7c3aed',
  contrastText: '#ffffff',
};

// Light mode colors with the same purple primary as dark mode
export const lightPalette: PaletteOptions = {
  mode: 'light',
  common,
  primary: primaryColor, // Use the same primary color as dark mode
  secondary: {
    main: '#0891b2', // Teal that complements purple
    light: '#22d3ee',
    dark: '#0e7490',
    contrastText: '#ffffff',
  },
  error: {
    main: '#dc2626', // Softer red
    light: '#ef4444',
    dark: '#b91c1c',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#d97706', // Amber
    light: '#f59e0b',
    dark: '#b45309',
    contrastText: '#ffffff',
  },
  info: {
    main: '#2563eb', // Blue
    light: '#3b82f6',
    dark: '#1d4ed8',
    contrastText: '#ffffff',
  },
  success: {
    main: '#059669', // Emerald
    light: '#10b981',
    dark: '#047857',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  background: {
    default: '#f8fafc', // Very light gray, easier on the eyes than pure white
    paper: '#ffffff',
  },
  text: {
    primary: '#111827', // Not pure black for reduced contrast
    secondary: '#4b5563',
    disabled: '#9ca3af',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

// Dark mode colors with purple primary
export const darkPalette: PaletteOptions = {
  mode: 'dark',
  common,
  primary: primaryColor, // Use the shared primary color
  secondary: {
    main: '#06b6d4', // Brighter teal for dark mode
    light: '#22d3ee',
    dark: '#0891b2',
    contrastText: '#ffffff',
  },
  error: {
    main: '#ef4444', // Brighter red for dark mode
    light: '#f87171',
    dark: '#dc2626',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#f59e0b', // Brighter amber for dark mode
    light: '#fbbf24',
    dark: '#d97706',
    contrastText: '#000000',
  },
  info: {
    main: '#3b82f6', // Brighter blue for dark mode
    light: '#60a5fa',
    dark: '#2563eb',
    contrastText: '#ffffff',
  },
  success: {
    main: '#10b981', // Brighter emerald for dark mode
    light: '#34d399',
    dark: '#059669',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  background: {
    default: '#121212', // Not pure black - reduces eye strain
    paper: '#1e1e1e', // Slightly lighter than background
  },
  text: {
    primary: '#e5e7eb', // Not pure white for reduced contrast
    secondary: '#9ca3af',
    disabled: '#6b7280',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};
