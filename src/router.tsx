import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/HomePage";
import { NavigationPath } from "./constants/navigation";
import SettingsPage from "./pages/SettingsPage";
import PermissionPage from "./pages/PermissionPage";
import ReportsPage from "./pages/ReportsPage";
import IntegrationPage from "./pages/IntegrationPage";
import RegistrationPage from "./pages/RegistrationPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route - redirects to the default language */}
        <Route path="/" element={<App />} />

        {/* Language-specific routes */}
        <Route path="/:lang/*" element={<App />} />

        {/* Main app routes */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path={NavigationPath.registration}
            element={<RegistrationPage />}
          />
          <Route path={NavigationPath.dashboard} element={<DashboardPage />} />
          <Route path={NavigationPath.settings} element={<SettingsPage />} />
          <Route path={NavigationPath.reports} element={<ReportsPage />} />
          <Route
            path={NavigationPath.permissions}
            element={<PermissionPage />}
          />
          <Route
            path={NavigationPath.integrations}
            element={<IntegrationPage />}
          />
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
