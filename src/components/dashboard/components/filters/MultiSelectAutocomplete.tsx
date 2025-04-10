import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

interface MultiSelectAutocompleteProps<T> {
  label: string;
  options: T[];
  value: T[];
  onChange: (value: T[]) => void;
}

const MultiSelectAutocomplete = <T,>({
  label,
  options,
  value,
  onChange,
}: MultiSelectAutocompleteProps<T>) => {
  const { t } = useTranslation();

  return (
    <Autocomplete
      multiple
      options={options}
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      renderInput={(params) => (
        <TextField {...params} label={t(label)} fullWidth margin="normal" />
      )}
    />
  );
};

export default MultiSelectAutocomplete;
