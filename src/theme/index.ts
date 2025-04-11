import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette";
import { createSpacing } from "./spacing";
import { typography } from "./typography";
import { getComponents } from "./components";

/**
 * Create a theme instance
 *
 * @param mode - 'light' or 'dark' color mode
 * @returns A complete MUI theme
 */
export function createAppTheme(mode: "light" | "dark"): Theme {
  const palette = mode === "light" ? lightPalette : darkPalette;

  const themeOptions: ThemeOptions = {
    palette,
    typography,
    spacing: createSpacing(),
    shape: {
      borderRadius: 8,
    },
  };

  // Create base theme first
  const baseTheme = createTheme(themeOptions);

  // Then create complete theme with components that depend on the theme
  return createTheme({
    ...themeOptions,
    components: getComponents(baseTheme),
  });
}

// Default themes - you can export these for direct usage
export const lightTheme = createAppTheme("light");
export const darkTheme = createAppTheme("dark");
