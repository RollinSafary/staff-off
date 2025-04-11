import { Container, Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Translations } from "../constants/translations";

function NotFound() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {t(Translations.ERROR_NOT_FOUND)}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {t(Translations.ERROR_NOT_FOUND_DESCRIPTION)}
        </Typography>
        <Button variant="contained" component={RouterLink} to="/">
          {t(Translations.ERROR_GO_BACK)}
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
