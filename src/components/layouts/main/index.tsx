import { Box, Container, Typography } from "@mui/material";
import Navbar from "./navbar";
import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Staff Off
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
