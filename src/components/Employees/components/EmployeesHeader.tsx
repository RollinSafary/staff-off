import { Box, Button, Card } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

const EmployeesHeader = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <h1 style={{ margin: 0 }}>{t(Translations.PAGE_EMPLOYEES_TITLE)}</h1>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Card
            sx={{
              backgroundColor: "white",
              boxShadow: 1,
              borderRadius: 1,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              p: 1,
            }}
          >
            <Button>{t(Translations.PAGE_EMPLOYEES_HEADER_YEARS_LAST)}</Button>
            <Button>{t(Translations.PAGE_EMPLOYEES_HEADER_YEARS_THIS)}</Button>
            <Button>{t(Translations.PAGE_EMPLOYEES_HEADER_YEARS_NEXT)}</Button>
          </Card>
          <Card
            sx={{
              backgroundColor: "white",
              boxShadow: 1,
              borderRadius: 1,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              p: 1,
            }}
          >
            <Button startIcon={<FilterAltIcon />}>
              {t(Translations.PAGE_EMPLOYEES_HEADER_FILTER)}
            </Button>
            <Button startIcon={<PersonAddIcon />}>
              {" "}
              {t(Translations.PAGE_EMPLOYEES_HEADER_ADD)}
            </Button>
          </Card>
        </Box>
      </Box>
    </header>
  );
};

export default EmployeesHeader;
