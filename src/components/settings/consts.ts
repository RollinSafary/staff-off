import { Translations } from "@/constants/translations";
import { ISettingDetails } from "./types";

export const settings: ISettingDetails[] = [
  {
    id: "leave",
    title: Translations.PAGE_SETTINGS_LEAVE_TITLE,
    description: Translations.PAGE_SETTINGS_LEAVE_DESCRIPTION,
  },
  {
    id: "leave policies",
    title: Translations.PAGE_SETTINGS_LEAVE_POLICIES_TITLE,
    description: Translations.PAGE_SETTINGS_LEAVE_POLICIES_DESCRIPTION,
  },
  {
    id: "holidays",
    title: Translations.PAGE_SETTINGS_HOLIDAYS_TITLE,
    description: Translations.PAGE_SETTINGS_HOLIDAYS_DESCRIPTION,
  },
  {
    id: "balance",
    title: Translations.PAGE_SETTINGS_BALANCE_TITLE,
    description: Translations.PAGE_SETTINGS_BALANCE_DESCRIPTION,
  },
  {
    id: "calendar",
    title: Translations.PAGE_SETTINGS_CALENDAR_TITLE,
    description: Translations.PAGE_SETTINGS_CALENDAR_DESCRIPTION,
  },
  {
    id: "block",
    title: Translations.PAGE_SETTINGS_BLOCK_TITLE,
    description: Translations.PAGE_SETTINGS_BLOCK_DESCRIPTION,
  },
  {
    id: "email",
    title: Translations.PAGE_SETTINGS_EMAIL_TITLE,
    description: Translations.PAGE_SETTINGS_EMAIL_DESCRIPTION,
  },
];
