import { Translations } from "@/constants/translations";
import { IIntegrationData } from "./types";

export const integrations: IIntegrationData[] = [
  {
    id: "google-calendar",
    title: Translations.PAGE_INTEGRATIONS_CARD_GOOGLE_CALENDAR_TITLE,
    description:
      Translations.PAGE_INTEGRATIONS_CARD_GOOGLE_CALENDAR_DESCRIPTION,
    imageURL: "https://tracker.day-off.app/assets/img/apps/google_calendar.png",
  },
  {
    id: "slack",
    title: Translations.PAGE_INTEGRATIONS_CARD_SLACK_TITLE,
    description: Translations.PAGE_INTEGRATIONS_CARD_SLACK_DESCRIPTION,
    imageURL: "https://tracker.day-off.app/assets/img/apps/slack.png",
  },
  {
    id: "outlook",
    title: Translations.PAGE_INTEGRATIONS_CARD_OUTLOOK_TITLE,
    description: Translations.PAGE_INTEGRATIONS_CARD_OUTLOOK_DESCRIPTION,
    imageURL: "https://tracker.day-off.app/assets/img/apps/outlook.png",
  },
  {
    id: "microsoft-teams",
    title: Translations.PAGE_INTEGRATIONS_CARD_TEAMS_TITLE,
    description: Translations.PAGE_INTEGRATIONS_CARD_TEAMS_DESCRIPTION,
    imageURL: "https://tracker.day-off.app/assets/img/apps/teams.png",
  },
];
