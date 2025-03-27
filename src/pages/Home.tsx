import React from "react";
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import useToast from "../hooks/useToast";

function Home() {
  const { t } = useTranslation();
  const toast = useToast();

  const showSuccessToast = () => {
    toast.success(t("toast.success_example"));
  };

  const showErrorToast = () => {
    toast.error(t("toast.error_example"));
  };

  const showWarningToast = () => {
    toast.warning(t("toast.warning_example"));
  };

  const showInfoToast = () => {
    toast.info(t("toast.info_example"));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("common.welcome")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("common.app_description")}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          {t("toast.examples_title")}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            color="success"
            onClick={showSuccessToast}
          >
            {t("toast.success")}
          </Button>
          <Button variant="contained" color="error" onClick={showErrorToast}>
            {t("toast.error")}
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={showWarningToast}
          >
            {t("toast.warning")}
          </Button>
          <Button variant="contained" color="info" onClick={showInfoToast}>
            {t("toast.info")}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Home;
