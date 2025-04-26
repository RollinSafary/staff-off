import { Button, Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

const YearButtons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        boxShadow: 1,
        borderRadius: 1,
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        p: 1,
        justifyContent: "center",
      }}
    >
      <Button>{t(Translations.PAGE_EMPLOYEES_HEADER_YEARS_LAST)}</Button>
      <Button>{t(Translations.PAGE_EMPLOYEES_HEADER_YEARS_THIS)}</Button>
      <Button>{t(Translations.PAGE_EMPLOYEES_HEADER_YEARS_NEXT)}</Button>
    </Card>
  );
};

export default YearButtons;
