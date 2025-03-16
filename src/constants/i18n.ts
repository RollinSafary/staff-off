/**
 * Constants for internationalization (i18n)
 */

/**
 * The default language of the application.
 * This language doesn't have a path prefix (e.g., / instead of /en/)
 */
export const DEFAULT_LANGUAGE = 'en';

/**
 * The list of all supported languages
 */
export const LANGUAGES = ['en', 'ru'];

/**
 * Regex pattern to match a valid language code in URL
 */
export const LANG_PATH_REGEX = /^\/([a-z]{2})(?:\/|$)/;

/**
 * Checks if a language code is valid
 */
export const isValidLanguage = (lang: string): boolean => {
  return LANGUAGES.includes(lang);
};

/**
 * Extracts the language from a URL path
 * Returns the language code or null if not present
 */
export const extractLanguageFromPath = (path: string): string | null => {
  const match = path.match(LANG_PATH_REGEX);
  if (match && isValidLanguage(match[1])) {
    return match[1];
  }
  return null;
};

/**
 * Creates a path with the appropriate language prefix
 * - If language is the default, no prefix is added
 * - Otherwise, the language code is added as a prefix
 */
export const createLocalizedPath = (path: string, language: string): string => {
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // For default language, no prefix is needed
  if (language === DEFAULT_LANGUAGE) {
    return normalizedPath;
  }

  // For other languages, add the language prefix
  return `/${language}${normalizedPath}`;
};

/**
 * Removes any language prefix from a path
 */
export const removeLanguageFromPath = (path: string): string => {
  return path.replace(LANG_PATH_REGEX, '/');
};
