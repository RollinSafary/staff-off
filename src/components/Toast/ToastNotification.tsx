import React from "react";
import { Snackbar, Alert, AlertProps } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiSelector } from "../../redux-store/slices/ui";
import { uiSlice } from "../../redux-store/slices/ui";

export interface ToastProps {
  open: boolean;
  message: string;
  severity: AlertProps["severity"];
  autoHideDuration?: number;
}

const ToastNotification: React.FC = () => {
  const dispatch = useDispatch();
  const { toast } = useSelector(uiSelector.getUI);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(uiSlice.actions.hideToast());
  };

  if (!toast) return null;

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={toast.autoHideDuration || 5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={toast.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastNotification;
