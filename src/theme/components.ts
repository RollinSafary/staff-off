// Component customizations for consistency and readability
// Focuses on comfortable padding and spacing

import { Components, Theme } from '@mui/material';

export const getComponents = (theme: Theme): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        // Improve font rendering
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        // Ensure proper line height for overall content
        lineHeight: 1.6,
        // Enhanced color transitions
        transition: 'background-color 0.5s ease, color 0.5s ease',
      },
      // Transitions are now handled by GlobalStyles
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: '8px 16px',
        textTransform: 'none',
        // Add comfortable min-width for better UX
        minWidth: 64,
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
      sizeLarge: {
        padding: '12px 24px',
        fontSize: '1rem',
      },
      sizeSmall: {
        padding: '6px 12px',
      },
    },
    defaultProps: {
      disableElevation: true, // Flatter design is easier on the eyes
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: 0,
        boxShadow:
          theme.palette.mode === 'light'
            ? '0 2px 8px rgba(0, 0, 0, 0.08)'
            : '0 2px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
        '&:last-child': {
          paddingBottom: theme.spacing(3),
        },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3, 3, 1),
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1, 3, 3),
        justifyContent: 'flex-end',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        marginBottom: theme.spacing(2),
      },
    },
    defaultProps: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        },
      },
      input: {
        padding: '12px 16px',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '0.9rem',
        '&.Mui-focused': {
          color: theme.palette.primary.main,
        },
      },
      outlined: {
        transform: 'translate(16px, 14px) scale(1)',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(16px, -9px) scale(0.75)',
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1),
        color: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
        '&.Mui-checked': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1),
        color: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600],
        '&.Mui-checked': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      switchBase: {
        '&.Mui-checked': {
          color: theme.palette.primary.main,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.5,
          },
        },
      },
      thumb: {
        boxShadow: 'none',
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        tableLayout: 'fixed',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      head: {
        fontWeight: 600,
        backgroundColor:
          theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.background.paper,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:last-child td': {
          borderBottom: 0,
        },
        '&:hover': {
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.primary.light + '10' // Very light purple with opacity
              : theme.palette.primary.dark + '10',
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: theme.spacing(2, 0),
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2, 3),
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2, 3, 3),
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 48,
      },
      indicator: {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        padding: theme.spacing(1.5, 2),
        minHeight: 48,
        '&.Mui-selected': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
});
