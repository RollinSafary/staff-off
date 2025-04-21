import React from "react";
import { Box, Typography } from "@mui/material";

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Box
      sx={{
        width: 14,
        height: 14,
        backgroundColor: color,
        border: color === "#fff" ? "1px solid #ccc" : "none",
      }}
    />
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
  </Box>
);

const Legend = () => {
  return (
    <Box display="flex" gap={4} py={2}>
      <LegendItem color="#7367F0" label="H-Holiday" />
      <LegendItem color="#f5f5f5" label="X-Weekends" />
      <LegendItem color="#fff" label="Working day" />
    </Box>
  );
};

export default Legend;
