import { Translations } from "@/constants/translations";
import { teams, leavePolicies, locations, roles } from "./filterMockData";

export const multiSelectConfigs = [
  {
    key: "team",
    label: Translations.PAGE_EMPLOYEES_FILTER_TEAM,
    options: teams,
  },
  {
    key: "leavePolicy",
    label: Translations.PAGE_EMPLOYEES_FILTER_LEAVE_POLICY,
    options: leavePolicies,
  },
  {
    key: "location",
    label: Translations.PAGE_EMPLOYEES_FILTER_LOCATION,
    options: locations,
  },
  {
    key: "role",
    label: Translations.PAGE_EMPLOYEES_FILTER_ROLE,
    options: roles,
  },
] as const;
