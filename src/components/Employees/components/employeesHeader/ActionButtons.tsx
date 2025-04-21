/* eslint-disable react/prop-types */
import { Button, Card } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

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
      <Button startIcon={<FilterAltIcon />} onClick={toggleFilters}>
        {showFilters
          ? t(Translations.PAGE_EMPLOYEES_HEADER_FILTER_HIDE)
          : t(Translations.PAGE_EMPLOYEES_HEADER_FILTER)}
      </Button>
      <Button startIcon={<PersonAddIcon />}>
        {t(Translations.PAGE_EMPLOYEES_HEADER_ADD)}
      </Button>
    </Card>
  );
};

export default ActionButtons;
