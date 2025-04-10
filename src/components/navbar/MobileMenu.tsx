import { useCallback, useState } from "react";
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
import { INavigationDetails, pages } from "../../constants/navigation";
import { languageOptions } from "../../constants/languages";
import LanguageFlag from "../LanguageFlag";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MobileMenu: React.FC = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onNavigationClick = useCallback(
    (page: INavigationDetails) => {
      navigate(page.path);
    },
    [navigate],
  );

  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex" } }}>
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
              <ListItem key={page.path} disablePadding>
                <ListItemButton onClick={() => onNavigationClick(page)}>
                  <ListItemText primary={t(page.title)} />
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
