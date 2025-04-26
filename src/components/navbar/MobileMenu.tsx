import { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useLanguage } from "../../theme/LanguageContext";
import { pages, getPageTranslation } from "../../mock/navigation";
import { languageOptions } from "../../mock/languages";
import LanguageFlag from "../LanguageFlag";

const MobileMenu: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleOpen}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 250,
            pt: theme.spacing(2),
          }}
          role="presentation"
          onClick={handleClose}
        >
          <Typography
            variant="h6"
            sx={{
              px: theme.spacing(2),
              pb: theme.spacing(2),
              fontWeight: 700,
            }}
          >
            YOUR LOGO
          </Typography>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem key={page} disablePadding>
                <ListItemButton>
                  <ListItemText primary={getPageTranslation(page, language)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {languageOptions.map((option) => (
              <ListItem key={option.code} disablePadding>
                <ListItemButton onClick={() => setLanguage(option.code)}>
                  <Box sx={{ mr: theme.spacing(1) }}>
                    <LanguageFlag language={option.code} />
                  </Box>
                  <ListItemText primary={option.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
