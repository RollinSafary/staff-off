import { TableCell } from "@mui/material";
import { t } from "i18next";
import { Translations } from "@/constants/translations";

const EmployeesTableHeaderCells = () => (
  <>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_EMPLOYEE)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_APPROVERS)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_TEAM)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_LOCATION)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_LEAVE_POLICY)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_WORK_SCHEDULE)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_STATUS)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_DAYS)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_HOURS)}</TableCell>
    <TableCell>{t(Translations.PAGE_EMPLOYEES_TABLE_ACTIONS)}</TableCell>
  </>
);

export default EmployeesTableHeaderCells;
