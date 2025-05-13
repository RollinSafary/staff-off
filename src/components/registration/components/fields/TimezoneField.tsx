import { Autocomplete, TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { timezones } from "../../data/mock";
import { useContext } from "react";
import { MyContext } from "../../context/FormContext";

const TimezoneField = () => {
  const { t } = useTranslation();
  const { utc, setUtc } = useContext(MyContext);

  return (
    <Autocomplete
      options={timezones}
      getOptionLabel={(option) => option.label}
      value={timezones.find((tz) => tz.label === utc) || null}
      onChange={(_, newValue) => setUtc(newValue ? newValue.label : "")}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(Translations.PAGE_REGISTER_FORM_TIMEZONE)}
        />
      )}
      fullWidth
    />
  );
};

export default TimezoneField;
