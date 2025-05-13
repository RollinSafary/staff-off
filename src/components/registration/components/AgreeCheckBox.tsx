import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
import { useContext } from "react";
import { MyContext } from "../context/FormContext";

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
      label={
        <Typography variant="body2">
          {t(Translations.PAGE_REGISTER_FORM_AGREEMENT)}
        </Typography>
      }
      sx={{ mt: 1 }}
    />
  );
};

export default AgreeCheckbox;
