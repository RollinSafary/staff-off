import { Translations } from "@/constants/translations";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Box
      sx={{
        width: 14,
        height: 14,
        backgroundColor: color,
        border: color === "#fff" ? "1px solid #ccc" : "none",
      }}
    />
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
  </Box>
);

const Legend = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" gap={4} py={2}>
      <LegendItem
        color="#7367F0"
        label={`H-${t(Translations.PAGE_TEAM_OVERVIEW_LEGEND_HOLIDAY)}`}
      />
      <LegendItem
        color="#f5f5f5"
        label={`X-${t(Translations.PAGE_TEAM_OVERVIEW_LEGEND_WEEKENDS)}`}
      />
      <LegendItem
        color="#fff"
        label={t(Translations.PAGE_TEAM_OVERVIEW_LEGEND_WORKDAY)}
      />
    </Box>
  );
};

export default Legend;
