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

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Box sx={{ boxShadow: 2, borderRadius: 2, p: 2 }}>
        <div className="filter-container">
          <h3>{t(Translations.PAGE_DASHBOARD_MONTH_OVERVIEW)}</h3>
          <CalendarOptions />
        </div>
        <div className="calendar-container">
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
        </div>
      </Box>
    </section>
  );
};

export default DashboardPage;
