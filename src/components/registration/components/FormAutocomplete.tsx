import { Autocomplete, TextField } from "@mui/material";
import { IFormAutocompleteProps } from "../types/type";

const FormAutocomplete = ({
  label,
  options,
  value,
  onChange,
}: IFormAutocompleteProps) => (
  <Autocomplete
    options={options}
    getOptionLabel={(option) => option.label}
    value={value}
    onChange={onChange}
    renderInput={(params) => <TextField {...params} label={label} />}
    fullWidth
  />
);

export default FormAutocomplete;
