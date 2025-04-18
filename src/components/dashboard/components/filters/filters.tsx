import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import FilterButton from "./FilterButton";
import DialogActionButtons from "./DialogActionButtons";
import MultiSelectAutocomplete from "./MultiSelectAutocomplete";
import { Translations } from "@/constants/translations";

const locations = ["Armenia", "USA", "Russia"];
const teams = ["Development", "Design", "Marketing"];
const leaveTypes = ["Schedule", "Casual"];

type LocationType = (typeof locations)[number];
type TeamType = (typeof teams)[number];
type LeaveType = (typeof leaveTypes)[number];

const CalendarOptions = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<LocationType[]>([]);
  const [team, setTeam] = useState<TeamType[]>([]);
  const [leaveType, setLeaveType] = useState<LeaveType[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    console.log("Saved:", { location, team, leaveType });
    handleClose();
  };

  return (
    <>
      <FilterButton onClick={handleOpen} />

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {t(Translations.PAGE_DASHBOARD_FILTER_CALENDAR_OPTIONS)}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <MultiSelectAutocomplete
            label={Translations.PAGE_DASHBOARD_FILTER_LOCATION}
            options={locations}
            value={location}
            onChange={setLocation}
          />
          <MultiSelectAutocomplete
            label={Translations.PAGE_DASHBOARD_FILTER_TEAM}
            options={teams}
            value={team}
            onChange={setTeam}
          />
          <MultiSelectAutocomplete
            label={Translations.PAGE_DASHBOARD_FILTER_LEAVE_TYPES}
            options={leaveTypes}
            value={leaveType}
            onChange={setLeaveType}
          />
        </DialogContent>
        <DialogActionButtons onCancel={handleClose} onSave={handleSave} />
      </Dialog>
    </>
  );
};
export default CalendarOptions;
