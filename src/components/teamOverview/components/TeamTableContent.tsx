import React, { useState } from "react";
import { addMonths, subMonths, format } from "date-fns";
import CalendarTable from "./CalendarTable";
import { Box, Button } from "@mui/material";
import { Translations } from "@/constants/translations";
import { t } from "i18next";

const staff = [
  { id: 1, name: "Mushegh" },
  { id: 2, name: "Tigran Employee" },
  { id: 3, name: "Tigran Admin" },
];

const TeamTableContent: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3));

  const handlePrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  return (
    <Box sx={{ boxShadow: 2, borderRadius: 1 }}>
      <div style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Button onClick={handlePrevMonth}>
            ← {t(Translations.PAGE_TEAM_OVERVIEW_TABLE_PREV_MONTH)}
          </Button>
          <h2>{format(currentDate, "MMMM yyyy")}</h2>
          <Button onClick={handleNextMonth}>
            {t(Translations.PAGE_TEAM_OVERVIEW_TABLE_NEXT_MONTH)} →
          </Button>
        </div>

        <CalendarTable currentDate={currentDate} staffMembers={staff} />
      </div>
    </Box>
  );
};

export default TeamTableContent;
