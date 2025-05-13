import { TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyContext } from "../../context/FormContext";

const EmailField = () => {
  const { t } = useTranslation();
  const { email, setEmail } = useContext(MyContext);

  return (
    <TextField
      label={t(Translations.PAGE_REGISTER_FORM_EMAIL)}
      value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)
      }
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default EmailField;
