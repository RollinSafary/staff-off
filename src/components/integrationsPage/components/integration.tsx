import { Box, Grid } from "@mui/material";
import IntegrationHeader from "./integrationHeader";
import IntegrationCard from "./card";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
const { t } = useTranslation();

const integrations = [
  {
    title: "Google calendar",
    description: t(Translations.PAGE_INTEGRATIONS_CARD_GOOGLE_CALENDAR),
    img: "https://tracker.day-off.app/assets/img/apps/google_calendar.png",
  },
  {
    title: "Slack",
    description: t(Translations.PAGE_INTEGRATIONS_CARD_SLACK),
    img: "https://tracker.day-off.app/assets/img/apps/slack.png",
  },
  {
    title: "Outlook",
    description: t(Translations.PAGE_INTEGRATIONS_CARD_OUTLOOK),
    img: "https://tracker.day-off.app/assets/img/apps/outlook.png",
  },
  {
    title: "Teams",
    description: t(Translations.PAGE_INTEGRATIONS_CARD_TEAMS),
    img: "https://tracker.day-off.app/assets/img/apps/teams.png",
  },
];
const IntegrationComponent = () => {
  return (
    <Box>
      <IntegrationHeader />

      <Grid container spacing={2}>
        {integrations.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <IntegrationCard
              title={item.title}
              description={item.description}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IntegrationComponent;
