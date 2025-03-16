# Toast Notification System

This is a simple toast notification system built with Material-UI's Snackbar and Alert components, integrated with Redux for state management.

## Features

- Four types of notifications: success, error, warning, and info
- Customizable duration
- Internationalization support
- Centralized state management with Redux
- Easy to use with a custom hook

## Usage

```tsx
import useToast from 'hooks/useToast';

function MyComponent() {
  const toast = useToast();

  // Show a success toast
  const handleSuccess = () => {
    toast.success('Operation completed successfully!');
  };

  // Show an error toast
  const handleError = () => {
    toast.error('An error occurred!');
  };

  // Show a warning toast
  const handleWarning = () => {
    toast.warning('This action cannot be undone!');
  };

  // Show an info toast
  const handleInfo = () => {
    toast.info('New updates are available!');
  };

  // Show a custom toast with a specific duration (in milliseconds)
  const handleCustom = () => {
    toast.showToast('Custom message', 'info', 10000);
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleWarning}>Show Warning</button>
      <button onClick={handleInfo}>Show Info</button>
      <button onClick={handleCustom}>Show Custom</button>
    </div>
  );
}
```

## API

### useToast Hook

The `useToast` hook provides the following methods:

- `showToast(message: string, severity?: 'success' | 'error' | 'warning' | 'info', duration?: number)`: Shows a toast with the specified message, severity, and duration.
- `hideToast()`: Hides the currently displayed toast.
- `clearToast()`: Completely removes the toast from the state.
- `success(message: string, duration?: number)`: Shows a success toast.
- `error(message: string, duration?: number)`: Shows an error toast.
- `warning(message: string, duration?: number)`: Shows a warning toast.
- `info(message: string, duration?: number)`: Shows an info toast.

## Implementation Details

The toast notification system consists of:

1. **ToastNotification Component**: Renders the Material-UI Snackbar and Alert components.
2. **Redux State**: Manages the toast state in the UI slice.
3. **useToast Hook**: Provides a simple API for showing and hiding toasts.

The toast state includes:

- `open`: Whether the toast is visible
- `message`: The message to display
- `severity`: The type of toast (success, error, warning, info)
- `autoHideDuration`: How long the toast should be displayed (in milliseconds)
