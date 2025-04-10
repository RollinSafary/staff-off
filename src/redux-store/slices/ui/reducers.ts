import { type SliceCaseReducers } from "@reduxjs/toolkit";
import { IAction } from "../../store";
import { IUISliceState, ToastState, ThemeMode } from "../../types/ui";

const createReducer = <T extends SliceCaseReducers<IUISliceState>>(
  reducer: T,
) => ({ ...reducer });

const reducers = createReducer({
  setIsMenuOpen(state: IUISliceState, action: IAction<boolean>) {
    state.isMenuOpen = action.payload;
  },
  setActiveDialog(state: IUISliceState, action: IAction<string | null>) {
    state.activeDialog = action.payload;
  },
  showToast(state: IUISliceState, action: IAction<ToastState>) {
    state.toast = {
      ...action.payload,
      open: true,
    };
  },
  hideToast(state: IUISliceState) {
    if (state.toast) {
      state.toast.open = false;
    }
  },
  clearToast(state: IUISliceState) {
    state.toast = null;
  },
  // Theme mode reducers
  setThemeMode(state: IUISliceState, action: IAction<ThemeMode>) {
    state.themeMode = action.payload;
    // Save to localStorage when theme changes
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", action.payload);
    }
  },
  toggleThemeMode(state: IUISliceState) {
    state.themeMode = state.themeMode === "light" ? "dark" : "light";
    // Save to localStorage when theme changes
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", state.themeMode);
    }
  },
});

export default reducers;
