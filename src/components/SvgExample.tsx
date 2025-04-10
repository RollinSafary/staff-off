import React from "react";
import { Box, Typography } from "@mui/material";

// Example of how to import an SVG file:
// import { ReactComponent as Logo } from '../assets/logo.svg';
// If you had an SVG in that location, you would use it like:
// <Logo width={50} height={50} />

const SvgExample: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">SVG Import Example</Typography>
      <Typography variant="body1">
        To use an SVG as a React component:
      </Typography>
      <Box
        component="pre"
        sx={{
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 1,
          overflow: "auto",
        }}
      >
        {`
// Import SVG as a React component
import { ReactComponent as Logo } from '../path/to/logo.svg';

// Use it in JSX
<Logo width={50} height={50} />
        `}
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        You can also style SVGs with props or CSS:
      </Typography>
      <Box
        component="pre"
        sx={{
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 1,
          overflow: "auto",
        }}
      >
        {`
<Logo 
  width={50} 
  height={50}
  fill="currentColor" 
  stroke="#ff0000"
  style={{ margin: '10px' }}
/>
        `}
      </Box>
    </Box>
  );
};

export default SvgExample;
