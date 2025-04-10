import { Language } from "../theme/LanguageContext";

// Language options configuration
export const languageOptions: {
  code: Language;
  label: string;
  flagUrl: string;
}[] = [
  {
    code: "en",
    label: "English",
    flagUrl: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "ru",
    label: "Русский",
    flagUrl: "https://flagcdn.com/w40/ru.png",
  },
];
