import { Box, Button } from "@mui/material";
import { Language } from "../../theme/LanguageContext";
import { pages, getPageTranslation } from "../../mock/navigation";

interface DesktopNavLinksProps {
  language: Language;
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ language }) => {
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
          {getPageTranslation(page, language)}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopNavLinks;
