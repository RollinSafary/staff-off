import React from "react";
import { IconButton, Tooltip, Box, keyframes } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { uiSlice } from "../../../../redux-store/slices/ui";
import { RootState } from "../../../../redux-store/store";

// Define keyframes for a more subtle ripple animation
const rippleEffect = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.4;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.ui.themeMode);
  const [rippleAnimation, setRippleAnimation] = React.useState(false);

  const handleToggleTheme = () => {
    // Start ripple animation
    setRippleAnimation(true);

    // Toggle theme mode
    dispatch(uiSlice.actions.toggleThemeMode());

    // Reset animation after it completes
    setTimeout(() => {
      setRippleAnimation(false);
    }, 400); // Shorter animation duration
  };

  return (
    <Box
      sx={{
        position: "relative",
        // Fixed dimensions to prevent layout shifts
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip title={themeMode === "light" ? "Dark Mode" : "Light Mode"}>
        <IconButton
          onClick={handleToggleTheme}
          color="inherit"
          size="medium"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {themeMode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Tooltip>

      {/* Subtle ripple animation element */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: rippleAnimation
            ? themeMode === "light"
              ? "rgba(0, 0, 0, 0.1)" // More subtle opacity
              : "rgba(255, 255, 255, 0.1)" // More subtle opacity
            : "transparent",
          animation: rippleAnimation ? `${rippleEffect} 0.4s ease-out` : "none", // Faster animation
          opacity: rippleAnimation ? 1 : 0,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default ThemeToggle;
