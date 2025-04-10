import { Translations } from "@/constants/translations";
import { Card, Typography, Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IntegrationCardProps {
  title: string;
  description: string;
  img: string;
}

const IntegrationCard = ({ title, description, img }: IntegrationCardProps) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Box sx={{ mr: 2 }}>
          <img
            src={img}
            style={{ width: "55px", height: "55px" }}
            alt={title}
          />
        </Box>

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

      <Button variant="contained" sx={{ textTransform: "none", ml: 2 }}>
        {t(Translations.PAGE_INTEGRATION_CARD_ADD_BUTTON)}
      </Button>
    </Card>
  );
};

export default IntegrationCard;
