import { useState } from "react";
import { Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
import YearButtons from "./YearButtons";
import ActionButtons from "./ActionButtons";
import FilterCard from "../employeesFilter/FilterBox";
import { HeaderContainer, HeaderActions } from "./EmployeesHeaderStyled";

const EmployeesHeader: React.FC = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <header>
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>{t(Translations.PAGE_EMPLOYEES_TITLE)}</h1>
        <HeaderActions>
          <YearButtons />
          <ActionButtons
            toggleFilters={toggleFilters}
            showFilters={showFilters}
          />
        </HeaderActions>
      </HeaderContainer>
      <Collapse in={showFilters}>
        <FilterCard />
      </Collapse>
    </header>
  );
};

export default EmployeesHeader;
