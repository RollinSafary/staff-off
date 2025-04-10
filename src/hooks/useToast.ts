import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AlertProps } from "@mui/material";
import { uiSlice } from "../redux-store/slices/ui";
import { ToastState } from "../redux-store/types/ui";

type ToastSeverity = AlertProps["severity"];

interface UseToastReturn {
  showToast: (
    message: string,
    severity?: ToastSeverity,
    duration?: number,
  ) => void;
  hideToast: () => void;
  clearToast: () => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

/**
 * Custom hook for displaying toast notifications
 * @returns Object with methods to show and hide toast notifications
 */
export const useToast = (): UseToastReturn => {
  const dispatch = useDispatch();

  const showToast = useCallback(
    (message: string, severity: ToastSeverity = "info", duration?: number) => {
      const toastData: ToastState = {
        message,
        severity,
        open: true,
        autoHideDuration: duration,
      };
      dispatch(uiSlice.actions.showToast(toastData));
    },
    [dispatch],
  );

  const hideToast = useCallback(() => {
    dispatch(uiSlice.actions.hideToast());
  }, [dispatch]);

  const clearToast = useCallback(() => {
    dispatch(uiSlice.actions.clearToast());
  }, [dispatch]);

  const success = useCallback(
    (message: string, duration?: number) => {
      showToast(message, "success", duration);
    },
    [showToast],
  );

  const error = useCallback(
    (message: string, duration?: number) => {
      showToast(message, "error", duration);
    },
    [showToast],
  );

  const warning = useCallback(
    (message: string, duration?: number) => {
      showToast(message, "warning", duration);
    },
    [showToast],
  );

  const info = useCallback(
    (message: string, duration?: number) => {
      showToast(message, "info", duration);
    },
    [showToast],
  );

  return {
    showToast,
    hideToast,
    clearToast,
    success,
    error,
    warning,
    info,
  };
};

export default useToast;
