import React from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
import {
  TableWrapper,
  HeaderCell,
  StaffCell,
  DayCell,
  StyledTable,
} from "./CalendarTableStyles";
import { ICalendarTableProps } from "../types/calendarTypes";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

const CalendarTable: React.FC<ICalendarTableProps> = ({
  currentDate,
  staffMembers,
}) => {
  const { t } = useTranslation();
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>
              {t(Translations.PAGE_TEAM_OVERVIEW_TABLE_STAFF_MEMBER)}
            </HeaderCell>
            {daysInMonth.map((day) => (
              <HeaderCell key={day.toISOString()}>
                <div>{format(day, "EEE")}</div>
                <div>{format(day, "d")}</div>
              </HeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {staffMembers.map((member) => (
            <tr key={member.id}>
              <StaffCell>{member.name}</StaffCell>
              {daysInMonth.map((day) => (
                <DayCell key={`${member.id}-${day.toISOString()}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default CalendarTable;
