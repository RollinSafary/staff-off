import { Translations } from "@/constants/translations";
import { Button } from "@mui/material";
import { t } from "i18next";

const BroadcastButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ px: 5, py: 1.2, borderRadius: 2, width: "150px" }}
    >
      {t(Translations.PAGE_ANNOUNCEMENT_BROADCAST_BUTTON)}
    </Button>
  );
};
export default BroadcastButton;
