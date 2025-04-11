import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IPermissionGroup } from "./types";
interface Props {
  group: IPermissionGroup;
}
const PermissionTableRow = ({ group }: Props) => {
  return (
    <TableRow>
      <TableCell>{group.name}</TableCell>
      <TableCell>{group.members}</TableCell>
      <TableCell>
        <IconButton color="primary" size="small">
          <EditIcon />
        </IconButton>
        <IconButton color="error" size="small">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default PermissionTableRow;
