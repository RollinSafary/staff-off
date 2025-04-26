import { Autocomplete, TextField, Grid } from "@mui/material";

type Props = {
  label: string;
  value: string[];
  options: string[];
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string[],
  ) => void;
};

const FilterMultiSelect = ({ label, value, options, onChange }: Props) => (
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
