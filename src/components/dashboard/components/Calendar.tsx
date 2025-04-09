import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./dashboard.css";
import CalendarOptions from "./filters/filters";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";
import FilterContainer from "./filters/FilterContainer";
import * as Styled from "./styled";

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Box sx={{ boxShadow: 2, borderRadius: 2, p: 2 }}>
        <FilterContainer>
          <h3>{t(Translations.PAGE_DASHBOARD_MONTH_OVERVIEW)}</h3>
          <CalendarOptions />
        </FilterContainer>
        <Box style={{ maxWidth: "100%" }}>
          <Styled.CalendarStyles />
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,today,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            buttonText={{
              today: t(Translations.PAGE_DASHBOARD_TODAY),
              month: t(Translations.PAGE_DASHBOARD_MONTH),
              week: t(Translations.PAGE_DASHBOARD_WEEK),
              day: t(Translations.PAGE_DASHBOARD_DAY),
              list: t(Translations.PAGE_DASHBOARD_LIST),
            }}
            events={[]}
          />
        </Box>
      </Box>
    </section>
  );
};

export default DashboardPage;
