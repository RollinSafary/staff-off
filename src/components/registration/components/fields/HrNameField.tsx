import { TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyContext } from "../../context/FormContext";

const HrNameField = () => {
  const { t } = useTranslation();
  const { firstName, setFirstName } = useContext(MyContext);
  const { lastName, setLastName } = useContext(MyContext);
  return (
    <>
      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_HR_FIRST_NAME)}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_HR_LAST_NAME)}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
    </>
  );
};

export default HrNameField;
