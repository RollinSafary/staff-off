import { rows } from "./mock";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";
const TeamTableBody = () => {
  return (
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
  );
};
export default TeamTableBody;
