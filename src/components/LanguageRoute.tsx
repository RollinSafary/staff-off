import React, { useEffect } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  isValidLanguage,
  DEFAULT_LANGUAGE,
  removeLanguageFromPath,
} from "../constants/i18n";

/**
 * A component that wraps routes with language prefixes.
 * It sets the application language based on the URL and redirects if needed.
 */
const LanguageRoute: React.FC = () => {
  // Since we know our route has a :lang parameter
  const params = useParams();
  const lang = params.lang;
  const { i18n } = useTranslation();
  const currentPath = window.location.pathname;

  useEffect(() => {
    // Only change language if it's valid and different from current
    if (lang && isValidLanguage(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang).catch(() => {
        // Failed to change language - error logging removed
      });
    }
  }, [lang, i18n]);

  // If the language parameter is invalid or not specified, redirect to default language
  if (!lang || !isValidLanguage(lang)) {
    return <Navigate to={removeLanguageFromPath(currentPath)} replace />;
  }

  // If language is the default language (e.g., "en"),
  // redirect to the same route without the language prefix
  if (lang === DEFAULT_LANGUAGE) {
    return <Navigate to={removeLanguageFromPath(currentPath)} replace />;
  }

  // Otherwise, render the matched route
  return <Outlet />;
};

export default LanguageRoute;
