import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import { LanguageProvider } from "./theme/LanguageContext";
import MainLayout from "./components/layouts/main";
import { CssBaseline } from "@mui/material";
import { ResponsiveProvider } from "./theme/ResponsiveContext";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ResponsiveProvider>
        <LanguageProvider>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </LanguageProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  );
};

export default App;
