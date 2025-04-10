import { Box } from "@mui/material";
import { Language } from "../theme/LanguageContext";
import { languageOptions } from "../constants/languages";

interface LanguageFlagProps {
  language: Language;
  size?: number;
}

const LanguageFlag = ({ language, size = 20 }: LanguageFlagProps) => {
  const flagUrl = languageOptions.find(
    (option) => option.code === language,
  )?.flagUrl;

  return (
    <Box
      component="img"
      src={flagUrl}
      alt={`${language} flag`}
      sx={{
        width: size,
        height: size * 0.75,
        objectFit: "cover",
        borderRadius: 0.5,
      }}
    />
  );
};

export default LanguageFlag;
