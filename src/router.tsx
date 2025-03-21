import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App"; // Весь layout с Navbar и Footer
import DashboardPage from "./pages/DashboardPage";
import TranslatedContent from "./App"; // Твой основной контент
import { DEFAULT_LANGUAGE } from "./constants/i18n";
import Home from "./pages/Home"; // Главная страница

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Главный компонент с Layout (Navbar и Footer) */}
        <Route path="/" element={<App />}>
          {/* Главная страница */}
          <Route index element={<Home />} />

          {/* Другие страницы */}
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="translated-content" element={<TranslatedContent />} />

          {/* Перенаправление для несуществующих маршрутов */}
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
