import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const CustomComponent = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode
          ? "rgba(255,255,255,0.05)"
          : "rgba(0,0,0,0.05)",
        color: theme.palette.text.primary,
        borderColor: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
        // Other styling
      }}
    >
      Content
    </Box>
  );
};
