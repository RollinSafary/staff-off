import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { t } from "i18next";
import ProBadge from "../common/proBadge";
import { Link } from "react-router-dom";

const cardsData = [
  {
    title: "Balances report",
    image: "/static/images/cards/contemplative-reptile.jpg",
    description: "Shows the total and used balance for each leave type.",
  },
  {
    title: "Detailed report",
    image: "/static/images/cards/chameleon.jpg",
    description: "Shows the employees requests overview.",
  },
  {
    title: "Total report",
    image: "/static/images/cards/gecko.jpg",
    description: "Shows the employees total used balance.",
  },
  {
    title: "Accruals report ",
    image: "/static/images/cards/iguana.jpg",
    description: "Shows balance details of leave types with accrual rates.",
  },
  {
    title: "Carry over report ",
    image: "/static/images/cards/iguana.jpg",
    description:
      "Shows the carried-over balance details for the past and current year.",
  },
];

const Report = () => {
  return (
    <>
      <header>
        <h1>{t("reports")}</h1>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
        {cardsData.map((card, index) => (
          <a href="" key={index} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                    {index >= cardsData.length - 2 && <ProBadge />}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link to={"/full-report"}>{t("full report")}</Link>
              </CardActions>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
};
export default Report;
