import { Translations } from "@/constants/translations";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { t } from "i18next";

const PermissionTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <strong>{t(Translations.PAGE_PERMISSION_TABLE_GROUP_NAME)}</strong>
        </TableCell>
        <TableCell>
          <strong>{t(Translations.PAGE_PERMISSION_TABLE_MEMBERS)}</strong>
        </TableCell>
        <TableCell>
          <strong>{t(Translations.PAGE_PERMISSION_TABLE_ACTIONS)}</strong>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
export default PermissionTableHead;
