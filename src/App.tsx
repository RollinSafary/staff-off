import React from "react";
import { ThemeProvider } from "./theme/ThemeProvider";
import { LanguageProvider } from "./theme/LanguageContext";
import Layout from "./components/Layout";
import { CssBaseline } from "@mui/material";
import { ResponsiveProvider } from "./theme/ResponsiveContext";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ResponsiveProvider>
        <LanguageProvider>
          <Layout>
            <Outlet />
          </Layout>
        </LanguageProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  );
};

export default App;
