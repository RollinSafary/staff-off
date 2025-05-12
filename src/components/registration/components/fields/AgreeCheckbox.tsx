import { Checkbox, FormControlLabel } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../context/FormContext";
import { useContext } from "react";

const AgreeCheckbox = () => {
  const { t } = useTranslation();
  const { agreement, setAgreement } = useContext(MyContext);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={agreement}
          onChange={(e) => setAgreement(e.target.checked)}
        />
      }
      label={t(Translations.PAGE_REGISTER_FORM_AGREEMENT)}
    />
  );
};

export default AgreeCheckbox;
