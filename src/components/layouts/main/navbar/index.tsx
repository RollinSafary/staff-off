import { AppBar, Container, Toolbar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import { useResponsive } from "@/hooks/useResponsive";

const Navbar = () => {
  const theme = useTheme();
  const { isDesktop } = useResponsive();

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
                  <DesktopNav />
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
