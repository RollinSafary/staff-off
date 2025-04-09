import React from "react";
import "./dashboard.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Balance } from "@mui/icons-material";
import { Translations } from "@/constants/translations";

const UserInfoCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          p: 3,
          maxWidth: 600,
          maxHeight: 500,
          mx: "auto",
          boxShadow: 1,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}
        >
          <Avatar sx={{ width: 56, height: 56 }}>U</Avatar>
          <Box>
            <Typography variant="h4">User Name</Typography>
            <Button variant="contained" color="primary" size="small">
              {t(Translations.PAGE_DASHBOARD_MY_REQUESTS)}
            </Button>
          </Box>
        </Box>
        <Typography variant="h3" sx={{ mt: 2 }}>
          {t(Translations.PAGE_DASHBOARD_BALANCE)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Card sx={{ maxWidth: 280, flex: 1, cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">
                {t(Translations.PAGE_DASHBOARD_CASUAL)}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 280, flex: 1, cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">
                {t(Translations.PAGE_DASHBOARD_SCHEDULE)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default UserInfoCard;
