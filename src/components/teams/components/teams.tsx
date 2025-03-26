import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

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
  return (
    <TableContainer component={Paper}>
      <header>
        <h1>Teams/Departments</h1>
      </header>
      <section>
        <Table sx={{ minWidth: 350 }} aria-label="Teams and Departments table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Manager</TableCell>
              <TableCell align="left">Members</TableCell>
              <TableCell align="left">Created/Last Modified</TableCell>
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
      <footer>
        <p>Total Teams: {rows.length}</p>
      </footer>
    </TableContainer>
  );
};
export default TeamDirectory;
