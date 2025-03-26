import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import Teams from "./pages/Teams";

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
        <Route path="/teams" element={<Teams />} />

        {/* Language-specific routes */}
        <Route path="/:lang/*" element={<App />} />

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
