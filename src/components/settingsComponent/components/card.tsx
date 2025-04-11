import { Card, Typography, Box } from "@mui/material";

interface IntegrationCardProps {
  title: string;
  description: string;
}

const IntegrationCard = ({ title, description }: IntegrationCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        justifyContent: "space-between",
        height: "100%",
        cursor: "pointer",
        ":hover": {
          boxShadow: 2,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="primary"
            fontSize={18}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default IntegrationCard;
