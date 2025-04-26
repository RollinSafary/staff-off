import { IUISliceState, ThemeMode } from "../../types/ui";

// Get initial theme from localStorage or default to 'light'
const getInitialTheme = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("themeMode") as ThemeMode;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      return savedTheme;
    }
  }
  return "light";
};

export const getInitialState = (): IUISliceState => ({
  isMenuOpen: false,
  activeDialog: null,
  toast: null,
  themeMode: getInitialTheme(),
});
