import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./dashboard.css";
const DashboardPage: React.FC = () => {
  return (
    <section>
      <h3>Month overview</h3>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,today,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          events={[
            { title: "Event 1", date: "2025-03-19" },
            { title: "Event 2", date: "2025-03-29" },
          ]}
        />
      </div>
    </section>
  );
};

export default DashboardPage;
