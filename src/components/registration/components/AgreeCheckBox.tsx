import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { IAgreeCheckboxProps } from "../types/type";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

const AgreeCheckbox = ({ checked, onChange }: IAgreeCheckboxProps) => {
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={
        <Typography variant="body2">
          {t(Translations.PAGE_REGISTER_FORM_AGREEMENT)}
        </Typography>
      }
      sx={{ mt: 1 }}
    />
  );
};

export default AgreeCheckbox;
