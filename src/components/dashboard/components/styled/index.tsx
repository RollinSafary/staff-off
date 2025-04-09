import FullCalendar from "@fullcalendar/react";
import { CalendarOptions } from "fullcalendar";
import styled, { createGlobalStyle } from "styled-components";

export const CalendarStyles = createGlobalStyle`
  @media (max-width: 1025px) {
    .fc-daygrid-day-number {
      font-size: 12px;
    }

    .fc-header-toolbar {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .fc-toolbar-chunk {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .fc-view-harness {
      min-height: 400px;
    }
  }
`;
