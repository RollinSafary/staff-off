import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/DashboardPage";
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import Home from "./pages/Home";
import { NavigationPath } from "./constants/navigation";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path={NavigationPath.dashboard} element={<DashboardPage />} />
          <Route
            path="*"
            element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
