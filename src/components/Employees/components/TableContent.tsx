import React from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import EmployeesTableHeader from "./EmployeesTableHeader";
import EmployeeRow from "./EmployeeRow";
import { Employee } from "../types/index";

interface Props {
  employees: Employee[];
  selected: number[];
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectOne: (id: number) => void;
  isSelected: (id: number) => boolean;
}

const TableContent = ({
  employees,
  selected,
  onSelectAll,
  onSelectOne,
  isSelected,
}: Props) => {
  return (
    <TableContainer
      sx={{
        overflowX: "auto",
        maxHeight: 500,
        "@media (max-width: 600px)": {
          maxHeight: "none",
        },
      }}
    >
      <Table
        sx={{
          "@media (max-width: 1000px)": {
            maxHeight: "none",
            width: "1000px",
          },
        }}
      >
        <EmployeesTableHeader
          isAllSelected={selected.length === employees.length}
          isIndeterminate={
            selected.length > 0 && selected.length < employees.length
          }
          onSelectAll={onSelectAll}
        />
        <TableBody>
          {employees.map((emp) => (
            <EmployeeRow
              key={emp.id}
              employee={emp}
              isSelected={isSelected(emp.id)}
              onSelect={() => onSelectOne(emp.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
