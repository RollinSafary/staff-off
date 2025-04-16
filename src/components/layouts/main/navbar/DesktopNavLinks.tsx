import { Box, Button } from "@mui/material";
import { pages } from "../../../../constants/navigation";
import { useTranslation } from "react-i18next";

const DesktopNavLinks = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            mx: 1,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          {t(page)}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopNavLinks;
