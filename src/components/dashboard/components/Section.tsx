import styled from "styled-components";

const DashboardSection = styled.section`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default DashboardSection;
