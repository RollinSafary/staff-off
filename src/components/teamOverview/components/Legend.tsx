import { Translations } from "@/constants/translations";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type LegendItemProps = {
  color: string;
  labelKey: string;
  params?: Record<string, string>;
};

const LegendItem = ({ color, labelKey, params }: LegendItemProps) => {
  const { t } = useTranslation();

  return (
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
        {t(labelKey, params)}
      </Typography>
    </Box>
  );
};

const Legend = () => (
  <Box display="flex" gap={4} py={2}>
    <LegendItem
      color="#7367F0"
      labelKey={Translations.PAGE_TEAM_OVERVIEW_LEGEND_HOLIDAY}
      params={{ prefix: "H-" }}
    />
    <LegendItem
      color="#f5f5f5"
      labelKey={Translations.PAGE_TEAM_OVERVIEW_LEGEND_WEEKENDS}
      params={{ prefix: "X-" }}
    />
    <LegendItem
      color="#fff"
      labelKey={Translations.PAGE_TEAM_OVERVIEW_LEGEND_WORKDAY}
    />
  </Box>
);

export default Legend;
