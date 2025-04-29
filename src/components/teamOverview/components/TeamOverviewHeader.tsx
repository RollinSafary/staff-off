import { Box, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import { HeaderContainer } from "./CalendarTableStyles";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

export default function TeamOverviewHeader() {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <Box>
        <h1>{t(Translations.PAGE_TEAM_OVERVIEW_TITLE)} </h1>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box />
        <Box display="flex" gap={2}>
          <Button startIcon={<DownloadIcon />} variant="contained">
            {t(Translations.PAGE_TEAM_OVERVIEW_EXPORT_EXCEL)}
          </Button>
          <Button startIcon={<PrintIcon />} variant="outlined">
            {t(Translations.PAGE_TEAM_OVERVIEW_PRINT)}
          </Button>
        </Box>
      </Box>
    </HeaderContainer>
  );
}
