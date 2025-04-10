import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import Integration from "./pages/IntegrationPage";

/**
 * Main router component that handles all application routes
 * with proper language path support.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route - redirects to the default language */}
        <Route path="/" element={<App />} />

        {/* Language-specific routes */}
        <Route path="/:lang/*" element={<App />} />
        <Route path="/integrations" element={<Integration />} />

        {/* Fallback route */}
        <Route
          path="*"
          element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
