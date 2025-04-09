import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Language, useLanguage } from "../../theme/LanguageContext";
import LanguageFlag from "../LanguageFlag";
import { languageOptions } from "../../constants/languages";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    handleCloseMenu();
  };

  // Current language option
  const currentLang = languageOptions.find(
    (option) => option.code === language
  );

  return (
    <Box sx={{ flexGrow: 0, ml: theme.spacing(1) }}>
      <Tooltip title="Change language">
        <Button
          onClick={handleOpenMenu}
          color="inherit"
          sx={{
            textTransform: "none",
            minWidth: "auto",
            padding: theme.spacing(0.75),
          }}
          startIcon={<LanguageFlag language={language} />}
        >
          {currentLang?.code.toUpperCase()}
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: theme.spacing(5.5) }}
        id="menu-appbar-language"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.code}
            onClick={() => handleLanguageChange(option.code)}
            selected={option.code === language}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: theme.spacing(1) }}>
                <LanguageFlag language={option.code} />
              </Box>
              <Typography textAlign="center">{option.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
