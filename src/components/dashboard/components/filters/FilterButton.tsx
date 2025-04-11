import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

interface FilterButtonProps {
  onClick: () => void;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FilterListIcon />}
      onClick={onClick}
      aria-label={t(Translations.PAGE_DASHBOARD_FILTERS)}
    >
      {t(Translations.PAGE_DASHBOARD_FILTERS)}
    </Button>
  );
};

export default FilterButton;
