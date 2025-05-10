import { TableCell, Checkbox, TableHead } from "@mui/material";
import EmployeesTableHeaderCells from "./EmployeesTableHeaderCells";

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
    <EmployeesTableHeaderCells />
  </TableHead>
);

export default EmployeesTableHeader;
