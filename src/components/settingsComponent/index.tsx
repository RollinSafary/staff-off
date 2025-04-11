import { Grid, Typography } from "@mui/material";
import Card from "./components/card";
import { useTranslation } from "react-i18next";
import useCardsData from "./data/cardsData";

export default function SettingsComponent() {
  const { t } = useTranslation();
  const cardsData = useCardsData();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {t("page.settings.title")}
      </Typography>
      <Grid container spacing={2}>
        {cardsData.map((card, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Card title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
