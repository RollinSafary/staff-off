import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(2)};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
export const StyledBox = styled(Box)`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid #eee;
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows[2]};
`;

export const StyledTitle = styled(Typography)`
  font-weight: bold;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const StyledSubtitle = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
