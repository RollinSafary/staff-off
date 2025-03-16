import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LogoSvg from '../assets/main/logo.svg';

const AssetExample: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Assets Import Examples
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">SVG as Image</Typography>
          <Box sx={{ mt: 2, p: 2, border: '1px dashed #ccc', borderRadius: 1 }}>
            <img src={LogoSvg} alt="Logo" width={150} height={50} />
          </Box>
          <Typography variant="body2" sx={{ mt: 1, fontFamily: 'monospace' }}>
            {`import LogoSvg from '../assets/main/logo.svg';`}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
            {`<img src={LogoSvg} alt="Logo" width={150} height={50} />`}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Other Asset Types</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
              {`// For images (PNG, JPG, etc.)`}
              <br />
              {`import myImage from '../assets/path/to/image.png';`}
              <br />
              <br />
              {`// Usage in img tag:`}
              <br />
              {`<img src={myImage} alt="Description" />`}
              <br />
              <br />
              {`// Usage as background in styled component:`}
              <br />
              {`<Box sx={{ backgroundImage: \`url(\${myImage})\` }} />`}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">
          Moving assets into the src directory allows direct imports, which provides several
          benefits:
        </Typography>
        <ul>
          <li>Type safety for imports</li>
          <li>Assets get processed by webpack (optimization, hashing, etc.)</li>
          <li>Better code organization with imports alongside components</li>
          <li>Using standard img tags with imported SVG sources</li>
        </ul>
      </Box>
    </Box>
  );
};

export default AssetExample;
