import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const HeaderCell = styled.th`
  min-width: 40px;
  text-align: center;
  padding: 4px;

  &:first-child {
    min-width: 150px;
    text-align: left;
    padding: 8px;
  }
`;

export const StaffCell = styled.td`
  padding: 8px;
  font-weight: bold;
`;

export const DayCell = styled.td`
  border: 1px solid #ddd;
  height: 40px;
  text-align: center;
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
