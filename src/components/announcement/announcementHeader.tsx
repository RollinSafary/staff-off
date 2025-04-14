import { Translations } from "@/constants/translations";
import { Typography } from "@mui/material";
import { t } from "i18next";

const Header = () => {
  return (
    <header>
      <Typography variant="h4" gutterBottom>
        {t(Translations.PAGE_ANNOUNCEMENT_TITLE)}
      </Typography>
    </header>
  );
};

export default Header;
