import { Language } from "../theme/LanguageContext";

// UI translations
export const uiTranslations = {
  changeLanguage: {
    en: "Change language",
    ru: "Изменить язык",
  },
  openSettings: {
    en: "Open settings",
    ru: "Открыть настройки",
  },
};

// Page content translations
export const contentTranslations = {
  title: {
    en: "Welcome to Your Application",
    ru: "Добро пожаловать в Ваше приложение",
  },
  description: {
    en: "This is a sample page that demonstrates the purple theme implementation with a responsive navbar and layout.",
    ru: "Это пример страницы, демонстрирующей реализацию фиолетовой темы с отзывчивой навигационной панелью и макетом.",
  },
  primaryBtn: {
    en: "Primary Action",
    ru: "Основное действие",
  },
  secondaryBtn: {
    en: "Secondary Action",
    ru: "Второстепенное действие",
  },
  feature: {
    en: "Feature",
    ru: "Функция",
  },
  featureDesc: {
    en: "This is a sample feature card that uses the purple theme. The theme includes proper spacing, typography, and color settings.",
    ru: "Это пример карточки функции, использующей фиолетовую тему. Тема включает правильные интервалы, типографику и настройки цвета.",
  },
};

// Helper function to get translation
export const getTranslation = (
  key: keyof typeof uiTranslations | keyof typeof contentTranslations,
  language: Language,
): string => {
  if (key in uiTranslations) {
    return uiTranslations[key as keyof typeof uiTranslations][language];
  }
  if (key in contentTranslations) {
    return contentTranslations[key as keyof typeof contentTranslations][
      language
    ];
  }
  return `Missing translation: ${key}`;
};
