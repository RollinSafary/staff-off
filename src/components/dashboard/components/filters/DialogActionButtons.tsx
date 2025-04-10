import { Button, DialogActions } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

interface DialogActionButtonsProps {
  onCancel: () => void;
  onSave: () => void;
}

const DialogActionButtons = ({
  onCancel,
  onSave,
}: DialogActionButtonsProps) => {
  const { t } = useTranslation();

  return (
    <DialogActions>
      <Button onClick={onCancel} color="inherit">
        {t(Translations.PAGE_DASHBOARD_CANCEL)}
      </Button>
      <Button
        onClick={onSave}
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
      >
        {t(Translations.PAGE_DASHBOARD_SAVE)}
      </Button>
    </DialogActions>
  );
};

export default DialogActionButtons;
