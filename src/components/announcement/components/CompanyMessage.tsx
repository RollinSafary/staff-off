import { Translations } from "@/constants/translations";
import { TextField, Typography } from "@mui/material";
import { t } from "i18next";

const CompanyMessage = () => {
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        {t(Translations.PAGE_ANNOUNCEMENT_COMPANY_MESSAGE)}
      </Typography>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        placeholder={t(Translations.PAGE_ANNOUNCEMENT_TEXT_FIELD_TITLE)}
      />
    </>
  );
};
export default CompanyMessage;
