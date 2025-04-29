import { Translations } from "./translations";

// Navigation items
export interface INavigationDetails {
  title: string;
  path: string;
}

export enum NavigationPath {
  dashboard = "dashboard",
  teamOverview = "team-overview",
  reports = "reports",
  employees = "employees",
  teams = "teams",
  integrations = "integrations",
  announcements = "announcements",
  settings = "settings",
  permissions = "permissions",
}

export const pages: INavigationDetails[] = [
  { title: Translations.NAVIGATION_DASHBOARD, path: NavigationPath.dashboard },
  // {
  //   title: Translations.NAVIGATION_TEAM_OVERVIEW,
  //   path: NavigationPath.teamOverview,
  // },
  { title: Translations.NAVIGATION_REPORTS, path: NavigationPath.reports },
  { title: Translations.NAVIGATION_EMPLOYEES, path: NavigationPath.employees },
  { title: Translations.NAVIGATION_TEAMS, path: NavigationPath.teams },
  {
    title: Translations.NAVIGATION_INTEGRATIONS,
    path: NavigationPath.integrations,
  },
  {
    title: Translations.NAVIGATION_ANNOUNCEMENTS,
    path: NavigationPath.announcements,
  },
  { title: Translations.NAVIGATION_SETTINGS, path: NavigationPath.settings },
  {
    title: Translations.NAVIGATION_PERMISSIONS,
    path: NavigationPath.permissions,
  },
];
export const settings = [
  "Company Profile",
  "Billing",
  "Balance",
  "My account",
  "Change password",
  "Logout",
];
