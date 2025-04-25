import { Card, Typography, Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ISettingDetails } from "../types";

interface Props extends ISettingDetails {
  title: string;
  description: string;
}

const SettingsCard = ({ title, description }: Props) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          display: "flex",
          alignItems: "start",
          p: 2,
          borderRadius: 2,
          justifyContent: "space-between",
          height: "100%",
          cursor: "pointer",
          ":hover": {
            boxShadow: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color="primary"
              fontSize={18}
            >
              {t(title)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t(description)}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default SettingsCard;
