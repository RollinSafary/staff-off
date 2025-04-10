import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export default FilterContainer;
