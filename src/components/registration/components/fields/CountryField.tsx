import { Autocomplete, TextField } from "@mui/material";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { countries } from "../../data/mock";
import { useContext } from "react";
import { MyContext } from "../../context/FormContext";

const CountryField = () => {
  const { t } = useTranslation();
  const { country, setCountry } = useContext(MyContext);

  return (
    <Autocomplete
      options={countries}
      getOptionLabel={(option) => option.label}
      value={countries.find((c) => c.label === country) || null}
      onChange={(event, newValue) => {
        setCountry(newValue ? newValue.label : "");
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(Translations.PAGE_REGISTER_FORM_COUNTRY)}
        />
      )}
      fullWidth
    />
  );
};

export default CountryField;
