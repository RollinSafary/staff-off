import { useState } from "react";
import { Box, Button, Card, Collapse } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import FilterCard from "./employeesFilter/FilterBox";

const EmployeesHeader = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

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
              boxShadow: 1,
              borderRadius: 1,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              p: 1,
            }}
          >
            <Button startIcon={<FilterAltIcon />} onClick={toggleFilters}>
              {showFilters
                ? t(Translations.PAGE_EMPLOYEES_HEADER_FILTER_HIDE)
                : t(Translations.PAGE_EMPLOYEES_HEADER_FILTER)}
            </Button>
            <Button startIcon={<PersonAddIcon />}>
              {t(Translations.PAGE_EMPLOYEES_HEADER_ADD)}
            </Button>
          </Card>
        </Box>
      </Box>

      <Collapse in={showFilters}>
        <FilterCard />
      </Collapse>
    </header>
  );
};

export default EmployeesHeader;
