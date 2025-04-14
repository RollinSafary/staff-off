import { FormControlLabel, Radio } from "@mui/material";
import { t } from "i18next";
import { Translations } from "@/constants/translations";

const AllCompanyOption = () => (
  <FormControlLabel
    value="all"
    control={<Radio color="primary" />}
    label={t(Translations.PAGE_ANNOUNCEMENT_ALL_COMPANY)}
  />
);

export default AllCompanyOption;
