import { Translations } from "@/constants/translations";
import { StyledSubtitle, StyledTitle } from "./styled";
import { useTranslation } from "react-i18next";

export default function RegisterHeader() {
  const { t } = useTranslation();
  return (
    <>
      <StyledTitle variant="h5">
        {t(Translations.PAGE_REGISTER_TITLE)}
      </StyledTitle>
      <StyledSubtitle variant="body2">
        {t(Translations.PAGE_REGISTER_SUBTITLE)}
      </StyledSubtitle>
    </>
  );
}
