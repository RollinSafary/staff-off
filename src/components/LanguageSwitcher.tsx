import React from "react";
import { useTranslation } from "react-i18next";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { createLocalizedPath, removeLanguageFromPath } from "../constants/i18n";
import { Translations } from "../constants/translations";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLanguage = event.target.value;

    // Change the language in i18n
    i18n.changeLanguage(newLanguage);

    // Update the URL to reflect the language change
    const pathWithoutLang = removeLanguageFromPath(location.pathname);
    const newPath = createLocalizedPath(pathWithoutLang, newLanguage);

    // Use navigate instead of directly manipulating history for better React Router integration
    navigate(newPath, { replace: true });
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="language-select-label">
        {t(Translations.COMMON_LANGUAGE)}
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language}
        label={t(Translations.COMMON_LANGUAGE)}
        onChange={handleChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Русский</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
