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

const CalendarTable: React.FC<ICalendarTableProps> = ({
  currentDate,
  staffMembers,
}) => {
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Staff member</HeaderCell>
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
