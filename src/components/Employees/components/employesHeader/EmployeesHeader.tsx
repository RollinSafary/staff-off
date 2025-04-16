import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
import YearButtons from "./YearButtons";
import ActionButtons from "./ActionButtons";
import FilterCard from "../employeesFilter/FilterBox";

const EmployeesHeader: React.FC = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState<boolean>(false);

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
          <YearButtons />
          <ActionButtons
            toggleFilters={toggleFilters}
            showFilters={showFilters}
          />
        </Box>
      </Box>
      <Collapse in={showFilters}>
        <FilterCard />
      </Collapse>
    </header>
  );
};

export default EmployeesHeader;
