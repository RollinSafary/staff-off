import { Box, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import { HeaderContainer } from "./CalendarTableStyles";

export default function TeamOverviewHeader() {
  return (
    <>
      <HeaderContainer>
        <Box>
          <h1>Team Overview</h1>
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
              Export Excel
            </Button>
            <Button startIcon={<PrintIcon />} variant="outlined">
              Print
            </Button>
          </Box>
        </Box>
      </HeaderContainer>
    </>
  );
}
