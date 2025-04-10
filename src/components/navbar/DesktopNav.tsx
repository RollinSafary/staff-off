import { Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { pages } from "../../constants/navigation";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DesktopNav = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container>
      {pages.map((page) => (
        <Link to={page.path} key={page.path} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              my: theme.spacing(2),
              // mx: theme.spacing(1),
              color: theme.palette.primary.contrastText,
              display: "block",
              "&:hover": {
                backgroundColor: `${theme.palette.primary.contrastText}10`, // 10% opacity
              },
            }}
          >
            {t(page.title)}
          </Button>
        </Link>
      ))}
    </Grid>
  );
};

export default DesktopNav;
