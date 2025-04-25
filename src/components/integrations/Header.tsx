import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

const IntegrationHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <h1>{t(Translations.PAGE_INTEGRATIONS_HEADER_TITLE)}</h1>

        <p>{t(Translations.PAGE_INTEGRATIONS_HEADER_DESCRIPTION)}</p>
      </header>
    </>
  );
};
export default IntegrationHeader;
