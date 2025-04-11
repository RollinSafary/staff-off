import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

const useCardsData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t(Translations.PAGE_SETTINGS_LEAVE_CARD_TITLE),
      description: t(Translations.PAGE_SETTINGS_LEAVE_CARD_DESCRIPTION),
    },
    {
      title: t(Translations.PAGE_SETTINGS_LEAVE_POLICIES_CARD_TITLE),
      description: t(
        Translations.PAGE_SETTINGS_LEAVE_POLICIES_CARD_DESCRIPTION
      ),
    },
    {
      title: t(Translations.PAGE_SETTINGS_HOLIDAYS_CARD_TITLE),
      description: t(Translations.PAGE_SETTINGS_HOLIDAYS_CARD_DESCRIPTION),
    },
    {
      title: t(Translations.PAGE_SETTINGS_BALANCE_CARD_TITLE),
      description: t(Translations.PAGE_SETTINGS_BALANCE_CARD_DESCRIPTION),
    },
    {
      title: t(Translations.PAGE_SETTINGS_CALENDAR_CARD_TITLE),
      description: t(Translations.PAGE_SETTINGS_CALENDAR_CARD_DESCRIPTION),
    },
    {
      title: t(Translations.PAGE_SETTINGS_BLOCK_CARD_TITLE),
      description: t(Translations.PAGE_SETTINGS_BLOCK_CARD_DESCRIPTION),
    },
    {
      title: t(Translations.PAGE_SETTINGS_EMAIL_CARD_TITLE),
      description: t(Translations.PAGE_SETTINGS_EMAIL_CARD_DESCRIPTION),
    },
  ];
};

export default useCardsData;
