import { AppBar, Container, Toolbar, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../../theme/LanguageContext";
import { useNavigate } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import LogoSvg from "../../assets/main/logo.svg";
import { useResponsive } from "@/hooks/useResponsive";

const Navbar = () => {
  const { language } = useLanguage();
  const theme = useTheme();
  const navigate = useNavigate();
  const { isDesktop } = useResponsive();

  // Function to get the root URL based on the current language
  const getRootUrl = () => {
    return language === "en" ? "/" : "/ru";
  };

  // Handle logo click
  const handleLogoClick = () => {
    navigate(getRootUrl());
  };

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={isDesktop ? 10 : 6}>
              {isDesktop ? (
                <Grid container justifySelf="flex-start">
                  {/* <Grid
                    item
                    xs={1}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 2,
                      cursor: "pointer",
                    }}
                    onClick={handleLogoClick}
                  >
                    <img src={LogoSvg} alt="Logo" width={120} height={40} />
                  </Grid> */}
                  {/* <Grid item xs={9}> */}
                  <DesktopNav />
                  {/* </Grid> */}
                </Grid>
              ) : (
                <Grid container alignItems="center" direction={"row"}>
                  <MobileMenu />
                </Grid>
              )}
            </Grid>
            <Grid item container xs={isDesktop ? 2 : 6} justifySelf="flex-end">
              <LanguageSwitcher />
              <ThemeToggle />
              <UserMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
