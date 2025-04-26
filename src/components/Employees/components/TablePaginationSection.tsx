import React from "react";
import { TablePagination } from "@mui/material";

interface Props {
  rowsPerPage: number;
  count: number;
}

const TablePaginationSection = ({ rowsPerPage, count }: Props) => (
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
