import { Translations } from "@/constants/translations";
import { Button, Grid } from "@mui/material";
import { t } from "i18next";

type Props = {
  onReset: () => void;
};

const FilterActions = ({ onReset }: Props) => (
  <Grid item xs={12}>
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="contained" color="primary">
          {t(Translations.PAGE_EMPLOYEES_FILTER_FILTER)}
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={onReset}>
          {t(Translations.PAGE_EMPLOYEES_FILTER_RESET)}
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

export default FilterActions;
