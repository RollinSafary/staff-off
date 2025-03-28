import { Button, DialogActions } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useTranslation } from "react-i18next";

interface DialogActionButtonsProps {
  onCancel: () => void;
  onSave: () => void;
}

const DialogActionButtons: React.FC<DialogActionButtonsProps> = ({
  onCancel,
  onSave,
}) => {
  const { t } = useTranslation();

  return (
    <DialogActions>
      <Button onClick={onCancel} color="inherit">
        {t("page.dashboard.cancel")}
      </Button>
      <Button
        onClick={onSave}
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
      >
        {t("page.dashboard.save")}
      </Button>
    </DialogActions>
  );
};

export default DialogActionButtons;
