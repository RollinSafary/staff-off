import { Translations } from "@/constants/translations";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

const cards = [
  {
    id: 1,
    count: 3,
    description: Translations.PAGE_DASHBOARD_NUMBER_OF_EMPLOYEES,
  },
  {
    id: 2,
    count: 2,
    description: Translations.PAGE_DASHBOARD_REQUESTS_TODAY,
  },
  {
    id: 3,
    count: 1,
    description: Translations.PAGE_DASHBOARD_REQUESTS_THIS_MONTH,
  },
];

const RequestCards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: 15 }}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {cards.map((card) => (
          <Card key={card.id}>
            <CardActionArea
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {card.count}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(card.description)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default RequestCards;
