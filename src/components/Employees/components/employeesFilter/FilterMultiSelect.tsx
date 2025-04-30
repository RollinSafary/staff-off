import { Autocomplete, TextField, Grid } from "@mui/material";
import { IMultiSelectProps } from "../../types";

const FilterMultiSelect = ({
  label,
  value,
  options,
  onChange,
}: IMultiSelectProps) => (
  <Grid item xs={12} md={4}>
    <Autocomplete
      multiple
      options={options}
      value={value}
      onChange={(_, newValue: string[]) => onChange(_, newValue)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  </Grid>
);

export default FilterMultiSelect;
