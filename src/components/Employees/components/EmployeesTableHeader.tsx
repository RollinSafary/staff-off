import { TableCell, Checkbox, TableHead } from "@mui/material";
import { t } from "i18next";
import { Translations } from "@/constants/translations";

type Props = {
  isAllSelected: boolean;
  isIndeterminate: boolean;
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EmployeesTableHeader = ({
  isAllSelected,
  isIndeterminate,
  onSelectAll,
}: Props) => (
  <TableHead sx={{ gap: 25 }}>
    <TableCell padding="checkbox">
      <Checkbox
        checked={isAllSelected}
        indeterminate={isIndeterminate}
        onChange={onSelectAll}
      />
    </TableCell>
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
  </TableHead>
);

export default EmployeesTableHeader;
