import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  extractLanguageFromPath,
} from "../constants/i18n";

// Use the same storage key as in LanguageContext
const LANGUAGE_STORAGE_KEY = "app-language";

// Custom path-based language detector
const pathDetector = {
  name: "path",
  lookup(_options: unknown) {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      const language = extractLanguageFromPath(window.location.pathname);
      return language;
    }
    return null;
  },
  cacheUserLanguage() {
    // You can optionally save the detected language
    if (process.env.NODE_ENV === "development") {
      // Logging removed
    }
  },
};

i18n
  // load translations using http (all translations are in public/locales folder)
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    supportedLngs: LANGUAGES,
    detection: {
      // Order is important - we want path to be first
      order: [
        "path",
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["localStorage", "cookie"],
      lookupFromPathIndex: 0,
      // Use our custom storage key for localStorage
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

// Add our custom path detector
i18n.services.languageDetector.addDetector(pathDetector);

export default i18n;
