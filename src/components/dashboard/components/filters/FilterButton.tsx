import { Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTranslation } from "react-i18next";

interface FilterButtonProps {
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FilterListIcon />}
      onClick={onClick}
      aria-label={t("page.dashboard.filters")}
    >
      {t("page.dashboard.filters")}
    </Button>
  );
};

export default FilterButton;
