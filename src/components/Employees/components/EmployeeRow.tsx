import {
  Box,
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Employee } from "../types/index";

type Props = {
  employee: Employee;
  isSelected: boolean;
  onSelect: () => void;
};

const EmployeeRow = ({ employee, isSelected, onSelect }: Props) => (
  <TableRow hover>
    <TableCell padding="checkbox">
      <Checkbox checked={isSelected} onChange={onSelect} />
    </TableCell>
    <TableCell>
      <Box display="flex" flexDirection="column">
        <Typography color="primary" sx={{ fontWeight: 500 }}>
          {employee.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {employee.dateRange}
        </Typography>
      </Box>
    </TableCell>
    <TableCell>• {employee.approver}</TableCell>
    <TableCell>{employee.team}</TableCell>
    <TableCell>{employee.location}</TableCell>
    <TableCell>{employee.policy}</TableCell>
    <TableCell>{employee.schedule}</TableCell>
    <TableCell>{employee.status}</TableCell>
    <TableCell>{employee.days}</TableCell>
    <TableCell>{employee.hours}</TableCell>
    <TableCell>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

export default EmployeeRow;
