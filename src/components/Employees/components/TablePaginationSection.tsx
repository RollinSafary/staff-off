import React from "react";
import { TablePagination } from "@mui/material";
import { IPaginationProps } from "../types";

const TablePaginationSection = ({ rowsPerPage, count }: IPaginationProps) => (
  <TablePagination
    rowsPerPageOptions={[50]}
    component="div"
    count={count}
    rowsPerPage={rowsPerPage}
    page={0}
    onPageChange={() => {}}
    onRowsPerPageChange={() => {}}
  />
);

export default TablePaginationSection;
