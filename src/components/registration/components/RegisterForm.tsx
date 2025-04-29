import {
  TextField,
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { countries, timezones } from "../data/mock";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  return (
    <form>
      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_EMAIL)}
        variant="outlined"
        fullWidth
      />

      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_COMPANY_NAME)}
        variant="outlined"
      />

      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_HR_NAME)}
        variant="outlined"
      />

      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t(Translations.PAGE_REGISTER_FORM_COUNTRY)}
          />
        )}
        fullWidth
      />

      <Autocomplete
        options={timezones}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t(Translations.PAGE_REGISTER_FORM_TIMEZONE)}
          />
        )}
        fullWidth
      />

      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_PASSWORD)}
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label={t(Translations.PAGE_REGISTER_FORM_CONFIRM_PASSWORD)}
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={<Checkbox />}
        label={t(Translations.PAGE_REGISTER_FORM_AGREEMENT)}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        {t(Translations.PAGE_REGISTER_FORM_SIGN_UP)}
      </Button>
    </form>
  );
};

export default RegisterForm;
