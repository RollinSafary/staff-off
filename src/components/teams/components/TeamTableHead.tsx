import { Translations } from "@/constants/translations";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TeamTableHead() {
  const { t } = useTranslation();
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">{t(Translations.PAGE_TEAMS_NAME)}</TableCell>
        <TableCell align="left">{t(Translations.PAGE_TEAMS_MANAGER)}</TableCell>
        <TableCell align="left">{t(Translations.PAGE_TEAMS_MEMBERS)}</TableCell>
        <TableCell align="left">{t(Translations.PAGE_TEAMS_CHANGES)}</TableCell>
      </TableRow>
    </TableHead>
  );
}
