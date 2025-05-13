import { TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../context/FormContext";
import { useContext } from "react";

const CompanyNameField = () => {
  const { t } = useTranslation();
  const { companyName, setCompanyName } = useContext(MyContext);

  return (
    <TextField
      label={t(Translations.PAGE_REGISTER_FORM_COMPANY_NAME)}
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};
export default CompanyNameField;
