import { TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyContext } from "../../context/FormContext";

const PasswordField = () => {
  const { t } = useTranslation();
  const { password, setPassword } = useContext(MyContext);
  return (
    <TextField
      label={t(Translations.PAGE_REGISTER_FORM_PASSWORD)}
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default PasswordField;
