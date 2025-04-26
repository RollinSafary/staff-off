import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Card } from "@mui/material";

export const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`;

export const HeaderActions = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`;

export const ButtonsWrapper = styled(Card)`
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  justify-content: center;
`;
