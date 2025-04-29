import { Translations } from "@/constants/translations";
import { StyledButton } from "./styled";
import { useTranslation } from "react-i18next";

const RegisterFooter = () => {
  const { t } = useTranslation();
  return (
    <StyledButton type="submit" variant="contained" fullWidth>
      {t(Translations.PAGE_REGISTER_FORM_SIGN_UP)}
    </StyledButton>
  );
};
export default RegisterFooter;
