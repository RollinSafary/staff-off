import { Card, Typography } from "@mui/material";
import React from "react";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { useTranslation } from "react-i18next";

const PendingRequests: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card
        sx={{
          maxWidth: 280,
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
          {t("page.dashboard.requests")} {t("page.dashboard.pending")}
        </Typography>
        <PendingActionsIcon sx={{ fontSize: 48, my: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {t("page.dashboard.requests")} {t("page.dashboard.pending")}
        </Typography>
      </Card>
    </div>
  );
};

export default PendingRequests;
