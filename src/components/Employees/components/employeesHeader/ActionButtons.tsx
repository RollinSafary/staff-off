/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
import { ButtonsWrapper } from "./EmployeesHeaderStyled";

interface ActionButtonsProps {
  toggleFilters: () => void;
  showFilters: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  toggleFilters,
  showFilters,
}) => {
  const { t } = useTranslation();

  return (
    <ButtonsWrapper>
      <Button startIcon={<FilterAltIcon />} onClick={toggleFilters}>
        {showFilters
          ? t(Translations.PAGE_EMPLOYEES_HEADER_FILTER_HIDE)
          : t(Translations.PAGE_EMPLOYEES_HEADER_FILTER)}
      </Button>
      <Button startIcon={<PersonAddIcon />}>
        {t(Translations.PAGE_EMPLOYEES_HEADER_ADD)}
      </Button>
    </ButtonsWrapper>
  );
};

export default ActionButtons;
