import React, { useState } from "react";
import { Paper } from "@mui/material";
import { employees } from "../data/employeesData";
import TableActions from "./TableAction";
import TablePaginationSection from "./TablePaginationSection";
import TableContent from "./TableContent";

const EmployeesTable = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const rowsPerPage = 50;

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked ? employees.map((emp) => emp.id) : []);
  };

  const handleSelectOne = (id: number) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const isSelected = (id: number) => selected.includes(id);

  return (
    <Paper sx={{ p: 2, width: "100%" }}>
      <TableActions />
      <TableContent
        employees={employees}
        selected={selected}
        onSelectAll={handleSelectAll}
        onSelectOne={handleSelectOne}
        isSelected={isSelected}
      />
      <TablePaginationSection
        rowsPerPage={rowsPerPage}
        count={employees.length}
      />
    </Paper>
  );
};

export default EmployeesTable;
