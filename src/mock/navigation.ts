import { Language } from "../theme/LanguageContext";

// Navigation items
export const pages = [
  "Dashboard",
  "Team overview",
  "Reports",
  "Employees",
  "Teams",
  "Integrations",
  "Announcements",
  "Settings",
  "Permissions",
];
export const settings = [
  "Company Profile",
  "Billing",
  "Balance",
  "My account",
  "Change password",
  "Logout",
];

// Navigation translations
export const getPageTranslation = (
  page: string,
  language: Language
): string => {
  if (language === "en") return page;

  const ruTranslations: Record<string, string> = {
    Home: "Главная",
    Dashboard: "Панель",
    Projects: "Проекты",
    Features: "Функции",
    Pricing: "Цены",
    Contact: "Контакты",
    Profile: "Профиль",
    Account: "Аккаунт",
    Logout: "Выход",
    "Team overview": "Обзор команды",
    Reports: "Отчёты",
    Employees: "Сотрудники",
    Teams: "Команды",
    Integrations: "Интеграции",
    Announcements: "Объявления",
    Settings: "Настройки",
    Permissions: "Разрешения",
    "Company Profile": "Профиль компании",
    Billing: "Оплата",
    Balance: "Баланс",
    "My account": "Мой аккаунт",
    "Change password": "Сменить пароль",
  };

  return ruTranslations[page] || page;
};
