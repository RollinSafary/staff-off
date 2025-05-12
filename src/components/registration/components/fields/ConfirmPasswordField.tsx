import { TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyContext } from "../../context/FormContext";

const ConfirmPasswordField = () => {
  const { t } = useTranslation();
  const { confirmPassword, setConfirmPassword } = useContext(MyContext);
  return (
    <TextField
      label={t(Translations.PAGE_REGISTER_FORM_CONFIRM_PASSWORD)}
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default ConfirmPasswordField;
