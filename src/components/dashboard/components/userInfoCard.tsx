import React from "react";
import "./dashboard.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const UserInfoCard: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          p: 3,
          maxWidth: 600,
          maxHeight: 500,
          mx: "auto",
          boxShadow: 1,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}
        >
          <Avatar sx={{ width: 56, height: 56 }}>U</Avatar>
          <Box>
            <Typography variant="h4">User Name</Typography>
            <Button variant="contained" color="primary" size="small">
              My Requests
            </Button>
          </Box>
        </Box>
        <Typography variant="h3" sx={{ mt: 2 }}>
          Balance
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Card sx={{ maxWidth: 280, flex: 1, cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">Casual</Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 280, flex: 1, cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6">Schedule</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default UserInfoCard;
