import { useTheme, useMediaQuery } from "@mui/material";

export const useResponsive = () => {
  const theme = useTheme();

  return {
    isMobile: useMediaQuery(theme.breakpoints.down("sm")),
    isTablet: useMediaQuery(theme.breakpoints.up("md")),
    isDesktop: useMediaQuery(theme.breakpoints.up("lg")),

    // Specific breakpoint matchers
    breakpoints: {
      xs: useMediaQuery(theme.breakpoints.only("xs")),
      sm: useMediaQuery(theme.breakpoints.only("sm")),
      md: useMediaQuery(theme.breakpoints.only("md")),
      lg: useMediaQuery(theme.breakpoints.only("lg")),
      xl: useMediaQuery(theme.breakpoints.only("xl")),
    },
  };
};
