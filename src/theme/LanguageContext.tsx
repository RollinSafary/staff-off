import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import i18n from '../i18n';

// Supported languages
export type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Storage key for saved language preference
const LANGUAGE_STORAGE_KEY = 'app-language';

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  defaultLanguage = 'en',
}) => {
  // Determine initial language from URL or storage
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      // Check URL path first
      const pathLang = window.location.pathname.startsWith('/ru') ? 'ru' : null;

      // Then check localStorage
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;

      // Return the determined language
      return pathLang || savedLang || defaultLanguage;
    }
    return defaultLanguage;
  });

  // Synchronize URL with language on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const hasRuPrefix = currentPath.startsWith('/ru');

      // If language is Russian but URL doesn't have /ru prefix, update the URL
      if (language === 'ru' && !hasRuPrefix) {
        const newPath = `/ru${currentPath === '/' ? '' : currentPath}`;
        window.history.replaceState({}, '', newPath);
      }

      // If language is English but URL has /ru prefix, update the URL (edge case)
      if (language === 'en' && hasRuPrefix) {
        const newPath = currentPath.replace(/^\/ru/, '') || '/';
        window.history.replaceState({}, '', newPath);
      }
    }
  }, []); // Run only once on initial load

  // Handle language change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Also change i18next language
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // Update URL to reflect language change
    const currentPath = window.location.pathname;
    const newPath =
      lang === 'en'
        ? currentPath.replace(/^\/ru/, '') || '/'
        : currentPath.startsWith('/ru')
          ? currentPath
          : `/ru${currentPath === '/' ? '' : currentPath}`;

    window.history.pushState({}, '', newPath);
  };

  // Save language preference when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  // Sync with i18next language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      if (lng && lng !== language && (lng === 'en' || lng === 'ru')) {
        setLanguageState(lng as Language);
      }
    };

    // Listen for language changes from i18next
    i18n.on('languageChanged', handleLanguageChanged);

    // Set initial i18next language if needed
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [language]);

  // Context value
  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
