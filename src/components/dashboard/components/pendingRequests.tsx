import { Box, Card, Typography } from "@mui/material";
import React from "react";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

const PendingRequests: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          minWidth: 280,
          mt: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          textAlign: "center",
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" align="left" width="100%">
          {t(Translations.PAGE_DASHBOARD_PENDING_REQUESTS)}
        </Typography>
        <PendingActionsIcon sx={{ fontSize: 48, my: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {t(Translations.PAGE_DASHBOARD_PENDING_REQUESTS)}
        </Typography>
      </Card>
    </Box>
  );
};

export default PendingRequests;
