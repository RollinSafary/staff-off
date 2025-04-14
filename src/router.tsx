import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/DashboardPage";
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import Home from "./pages/Home";
import { NavigationPath } from "./constants/navigation";
import PermissionPage from "./pages/PermissionPage";
import ReportsPage from "./pages/ReportsPage";
import EmployeesPage from "./pages/EmployeesPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path={NavigationPath.dashboard} element={<DashboardPage />} />
          <Route path={NavigationPath.reports} element={<ReportsPage />} />
          <Route
            path={NavigationPath.permissions}
            element={<PermissionPage />}
          />
          <Route path={NavigationPath.employees} element={<EmployeesPage />} />
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
