import { Language } from "../theme/LanguageContext";

// Navigation items
export const pages = ["Projects", "Features", "Pricing", "Contact"];
export const settings = ["Profile", "Account", "Dashboard", "Logout"];

// Navigation translations
export const getPageTranslation = (
  page: string,
  language: Language,
): string => {
  if (language === "en") return page;

  const ruTranslations: Record<string, string> = {
    Home: "Главная",
    Projects: "Проекты",
    Features: "Функции",
    Pricing: "Цены",
    Contact: "Контакты",
    Profile: "Профиль",
    Account: "Аккаунт",
    Dashboard: "Панель",
    Logout: "Выход",
  };

  return ruTranslations[page] || page;
};
