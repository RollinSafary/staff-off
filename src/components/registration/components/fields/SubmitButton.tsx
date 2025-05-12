import { Button } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

const SubmitButton = () => {
  const { t } = useTranslation();

  return (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {t(Translations.PAGE_REGISTER_FORM_SIGN_UP)}
    </Button>
  );
};

export default SubmitButton;
