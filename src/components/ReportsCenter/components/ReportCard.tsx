import React, { useTransition } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ProBadge from "../../common/proBadge";
import { Link } from "react-router-dom";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";

interface ReportCardProps {
  title: string;
  description: string;
  image: string;
  showBadge?: boolean;
}

const ReportCard: React.FC<ReportCardProps> = ({
  title,
  description,
  image,
  showBadge,
}) => {
  const { t } = useTranslation();
  return (
    <a href="" style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardActionArea sx={{ flexGrow: 1 }}>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
              {showBadge && <ProBadge />}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center" }}>
          <Link to={"/full-report"}>
            {t(Translations.PAGE_REPORTS_FULL_REPORT)}
          </Link>
        </CardActions>
      </Card>
    </a>
  );
};

export default ReportCard;
