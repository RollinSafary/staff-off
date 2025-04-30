import { Box, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

const TableActions = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Box />
      <Box display="flex" gap={2}>
        <Button startIcon={<PrintIcon />} variant="outlined">
          {t(Translations.PAGE_EMPLOYEES_TABLE_PRINT)}
        </Button>
        <Button startIcon={<DownloadIcon />} variant="contained">
          {t(Translations.PAGE_EMPLOYEES_TABLE_EXCEL)}
        </Button>
      </Box>
    </Box>
  );
};

export default TableActions;
