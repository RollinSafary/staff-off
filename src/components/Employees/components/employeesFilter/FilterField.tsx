import { TextField, Grid } from "@mui/material";

type Props = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterField = ({ label, value, onChange }: Props) => (
  <Grid item xs={12} md={4}>
    <TextField fullWidth label={label} value={value} onChange={onChange} />
  </Grid>
);

export default FilterField;
