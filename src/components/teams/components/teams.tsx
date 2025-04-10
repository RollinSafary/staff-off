import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
const createData = (
  name: string,
  manager: string,
  members: number,
  createdLastModified: string
) => ({
  name,
  manager,
  members,
  createdLastModified,
});

const rows = [
  createData("Development", "Alice", 20, "11 days ago"),
  createData("Quality", "Bob", 8, "14 days ago"),
  createData("IT", "Charlie", 15, "a month ago"),
  createData("Technical Support", "David", 13, "a month ago"),
  createData("HR", "Eve", 12, "2 months ago"),
];

const TeamDirectory = () => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <header>
        <h1>{t(Translations.PAGE_TEAMS_TITLE)}</h1>
      </header>
      <section>
        <Table sx={{ minWidth: 350 }} aria-label="Teams and Departments table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                {t(Translations.PAGE_TEAMS_NAME)}
              </TableCell>
              <TableCell align="left">
                {t(Translations.PAGE_TEAMS_MANAGER)}
              </TableCell>
              <TableCell align="left">
                {t(Translations.PAGE_TEAMS_MEMBERS)}
              </TableCell>
              <TableCell align="left">
                {t(Translations.PAGE_TEAMS_CHANGES)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.manager}</TableCell>
                <TableCell align="left">{row.members}</TableCell>
                <TableCell align="left">{row.createdLastModified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </TableContainer>
  );
};
export default TeamDirectory;
