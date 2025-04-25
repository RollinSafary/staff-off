import React, { useState } from "react";
import { addMonths, subMonths, format } from "date-fns";
import CalendarTable from "./CalendarTable";
import { Box, Button } from "@mui/material";
import { Translations } from "@/constants/translations";
import { t } from "i18next";
import { staff } from "./mock";
import { HeaderContainer } from "./CalendarTableStyles";
import Legend from "./Legend";
import { useTranslation } from "react-i18next";

const TeamTableContent: React.FC = () => {
  const { t } = useTranslation();
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
        <Legend />

        <HeaderContainer style={{ marginBottom: 20 }}>
          <Button onClick={handlePrevMonth}>
            ← {t(Translations.PAGE_TEAM_OVERVIEW_TABLE_PREV_MONTH)}
          </Button>
          <h2>{format(currentDate, "MMMM yyyy")}</h2>
          <Button onClick={handleNextMonth}>
            {t(Translations.PAGE_TEAM_OVERVIEW_TABLE_NEXT_MONTH)} →
          </Button>
        </HeaderContainer>

        <CalendarTable currentDate={currentDate} staffMembers={staff} />
      </div>
    </Box>
  );
};

export default TeamTableContent;
