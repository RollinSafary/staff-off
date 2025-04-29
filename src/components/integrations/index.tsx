import { Box, Grid } from "@mui/material";
import IntegrationHeader from "./Header";
import IntegrationCard from "./components/IntegrationCard";
import { integrations } from "./consts";

const IntegrationContent = () => {
  return (
    <Box>
      <IntegrationHeader />

      <Grid container spacing={2}>
        {integrations.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <IntegrationCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IntegrationContent;
