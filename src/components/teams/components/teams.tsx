import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
import TeamTableBody from "./teamTableBody";
import TeamTableHead from "./TeamTableHead";

const TeamDirectory = () => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <header>
        <h1>{t(Translations.PAGE_TEAMS_TITLE)}</h1>
      </header>
      <section>
        <Table sx={{ minWidth: 350 }} aria-label="Teams and Departments table">
          <TeamTableHead />
          <TeamTableBody />
        </Table>
      </section>
    </TableContainer>
  );
};
export default TeamDirectory;
