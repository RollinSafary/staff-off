import { useTranslation } from "react-i18next";
import { StyledButton } from "./styled";
import { Translations } from "@/constants/translations";

interface RegisterFooterProps {
  disabled: boolean;
}

const RegisterFooter = ({ disabled }: RegisterFooterProps) => {
  const { t } = useTranslation();
  return (
    <StyledButton
      type="submit"
      disabled={disabled}
      fullWidth
      variant="contained"
    >
      {t(Translations.PAGE_REGISTER_FORM_SIGN_UP)}
    </StyledButton>
  );
};

export default RegisterFooter;
