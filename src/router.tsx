import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/DashboardPage";
import TranslatedContent from "./App";
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import Home from "./pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="translated-content" element={<TranslatedContent />} />

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
