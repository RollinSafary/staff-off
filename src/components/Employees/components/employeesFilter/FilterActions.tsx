import { Translations } from "@/constants/translations";
import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
interface FilterActionsProps {
  onReset: () => void;
}
const FilterActions = ({ onReset }: FilterActionsProps) => {
  const { t } = useTranslation();

  return (
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
};

export default FilterActions;
