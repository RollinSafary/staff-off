import { Button, Grid } from "@mui/material";

type Props = {
  onReset: () => void;
};

const FilterActions = ({ onReset }: Props) => (
  <Grid item xs={12}>
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained" color="primary">
          Filter
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={onReset}>
          Reset
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

export default FilterActions;
