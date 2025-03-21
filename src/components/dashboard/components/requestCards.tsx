import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const RequestCards: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      count: 3,
      description: t("number-of-employees"),
    },
    {
      id: 2,
      count: 2,
      description: t("requests-today"),
    },
    {
      id: 3,
      count: 1,
      description: t("requests-this-month"),
    },
  ];
  return (
    <div className="requestCards">
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
          <Card>
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
                  {card.description}
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
