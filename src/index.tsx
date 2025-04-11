import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import "./i18n";
import AppRouter from "./router";
import { ThemeProvider } from "./theme/ThemeProvider";
import { CssBaseline } from "@mui/material";

const rootDiv = document.getElementById("root")! as HTMLDivElement;

const root = ReactDOM.createRoot(rootDiv);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </Provider>,
);
