import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { settings } from "./consts";
import SettingsCard from "./components/SettingsCard";
import { Translations } from "@/constants/translations";

export default function SettingsContent() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {t(Translations.PAGE_SETTINGS_TITLE)}
      </Typography>
      <Grid container spacing={2}>
        {settings.map((card) => (
          <SettingsCard key={card.id} {...card} />
        ))}
      </Grid>
    </>
  );
}
