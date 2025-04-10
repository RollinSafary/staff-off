import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import useToast from "../hooks/useToast";
import { Translations } from "@/constants/translations";

function Home() {
  const { t } = useTranslation();
  const toast = useToast();

  const showSuccessToast = () => {
    toast.success(t(Translations.TOAST_SUCCESS));
  };

  const showErrorToast = () => {
    toast.error(t(Translations.TOAST_ERROR_EXAMPLE));
  };

  const showWarningToast = () => {
    toast.warning(t(Translations.TOAST_WARNING_EXAMPLE));
  };

  const showInfoToast = () => {
    toast.info(t(Translations.TOAST_INFO_EXAMPLE));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t(Translations.COMMON_WELCOME)}
        </Typography>
        <Typography variant="body1" paragraph>
          {t(Translations.COMMON_APP_DESCRIPTION)}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          {t(Translations.TOAST_EXAMPLES_TITLE)}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            color="success"
            onClick={showSuccessToast}
          >
            {t(Translations.TOAST_SUCCESS)}
          </Button>
          <Button variant="contained" color="error" onClick={showErrorToast}>
            {t(Translations.TOAST_ERROR)}
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={showWarningToast}
          >
            {t(Translations.TOAST_WARNING)}
          </Button>
          <Button variant="contained" color="info" onClick={showInfoToast}>
            {t(Translations.TOAST_INFO)}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Home;
