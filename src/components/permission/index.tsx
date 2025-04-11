import { Table, TableBody, TableContainer, Paper } from "@mui/material";

import { Translations } from "@/constants/translations";
import PermissionTableHead from "./components/PermissionTableHead";
import PermissionTableRow from "./components/PermissionTableRow";
import { permissionGroupsList } from "./mock";
import { useTranslation } from "react-i18next";

export default function Permissions() {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <h1>{t(Translations.PAGE_PERMISSION_TITLE)} </h1>
      </header>
      <section>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <PermissionTableHead />
            <TableBody>
              {permissionGroupsList.map((group) => (
                <PermissionTableRow group={group} key={group.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
}
