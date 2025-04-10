// Typography definitions based on readability guidelines
// Uses system fonts by default to improve performance

import { TypographyOptions } from "@mui/material/styles/createTypography";

// Font families with system font stack for optimal performance and consistency
const fontFamily = [
  "Inter",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

// Root font sizes are slightly larger than browser defaults
// for better readability across devices
export const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: "2.5rem", // 40px at 16px base
    lineHeight: 1.2,
    letterSpacing: "-0.01562em",
  },
  h2: {
    fontWeight: 700,
    fontSize: "2rem", // 32px at 16px base
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.75rem", // 28px at 16px base
    lineHeight: 1.3,
    letterSpacing: "0em",
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.5rem", // 24px at 16px base
    lineHeight: 1.35,
    letterSpacing: "0.00735em",
  },
  h5: {
    fontWeight: 600,
    fontSize: "1.25rem", // 20px at 16px base
    lineHeight: 1.4,
    letterSpacing: "0em",
  },
  h6: {
    fontWeight: 600,
    fontSize: "1.125rem", // 18px at 16px base
    lineHeight: 1.4,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: "1rem", // 16px
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: "0.875rem", // 14px
    lineHeight: 1.5,
    letterSpacing: "0.00714em",
  },
  body1: {
    fontWeight: 400,
    fontSize: "1rem", // 16px
    lineHeight: 1.6, // Slightly increased for better readability
    letterSpacing: "0.00938em",
  },
  body2: {
    fontWeight: 400,
    fontSize: "0.875rem", // 14px
    lineHeight: 1.6, // Slightly increased for better readability
    letterSpacing: "0.01071em",
  },
  button: {
    fontWeight: 500,
    fontSize: "0.875rem", // 14px
    lineHeight: 1.5,
    letterSpacing: "0.02857em",
    textTransform: "none", // More readable than uppercase
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.75rem", // 12px
    lineHeight: 1.5,
    letterSpacing: "0.03333em",
  },
  overline: {
    fontWeight: 500,
    fontSize: "0.75rem", // 12px
    lineHeight: 1.5,
    letterSpacing: "0.08333em",
    textTransform: "uppercase",
  },
};
