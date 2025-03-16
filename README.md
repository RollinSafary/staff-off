# TypeScript React MUI Application

A modern React application with TypeScript, Material-UI, Redux, and i18n support.

## Translation System

This project uses a structured translation system with the following features:

### Translation Key Format

Translation keys follow a specific format:

- Use dots (`.`) to separate hierarchy levels (e.g., `common.welcome`)
- Use dashes (`-`) to separate words within a level (e.g., `auth.forgot-password`)

### Translation Utilities

The project includes several utilities for managing translations:

#### 1. Generate Translation Enum

```bash
npm run translations:generate
```

This script generates a TypeScript enum with all translation keys, providing type safety when using translations in the code.

Example usage:

```tsx
import { Translations } from '../constants/translations';

// In a component
const { t } = useTranslation();
t(Translations.COMMON_WELCOME);
```

#### 2. Order Translations

```bash
npm run translations:order
```

This script:

- Sorts translation keys alphabetically
- Checks for missing translations in non-English languages
- Removes additional keys in non-English languages that don't exist in English

#### 3. Find Unused Translations

```bash
npm run translations:unused
```

This script scans the codebase to find translation keys that are not being used, helping to keep the translation files clean.

#### 4. Run All Translation Scripts

```bash
npm run translations
```

This command runs all the translation utilities in sequence.

## Toast Notification System

The application includes a toast notification system built with Material-UI's Snackbar and Alert components, integrated with Redux for state management.

### Features

- Four types of notifications: success, error, warning, and info
- Customizable duration
- Internationalization support
- Centralized state management with Redux
- Easy to use with a custom hook

### Usage

```tsx
import useToast from 'hooks/useToast';

function MyComponent() {
  const toast = useToast();

  // Show different types of toasts
  toast.success('Success message');
  toast.error('Error message');
  toast.warning('Warning message');
  toast.info('Info message');
}
```
