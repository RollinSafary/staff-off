import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { t } from "i18next";
import { Translations } from "@/constants/translations";

export default function Permission() {
  const groupData = [
    { name: "Admin (System group)", members: 2 },
    { name: "Employee (System group)", members: 1 },
  ];
  return (
    <>
      <header>
        <h1>{t(Translations.PAGE_PERMISSION_TITLE)} </h1>
      </header>
      <section>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>
                    {t(Translations.PAGE_PERMISSION_TABLE_GROUP_NAME)}
                  </strong>
                </TableCell>
                <TableCell>
                  <strong>
                    {t(Translations.PAGE_PERMISSION_TABLE_MEMBERS)}
                  </strong>
                </TableCell>
                <TableCell>
                  <strong>
                    {t(Translations.PAGE_PERMISSION_TABLE_ACTIONS)}
                  </strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groupData.map((group, index) => (
                <TableRow key={index}>
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
}
