import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Autocomplete,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

const locations = ["Armenia", "USA", "Russia"] as const;
const teams = ["Development", "Design", "Marketing"] as const;
const leaveTypes = ["Schedule", "Casual"] as const;

type LocationType = (typeof locations)[number];
type TeamType = (typeof teams)[number];
type LeaveType = (typeof leaveTypes)[number];

export default function CalendarOptions() {
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
      <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={handleOpen}
      >
        Filters
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Calendar options
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Autocomplete
            multiple
            options={locations}
            value={location}
            onChange={(e, newValue) => setLocation(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Autocomplete
            multiple
            options={teams}
            value={team}
            onChange={(e, newValue) => setTeam(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Team" fullWidth margin="normal" />
            )}
          />
          <Autocomplete
            multiple
            options={leaveTypes}
            value={leaveType}
            onChange={(e, newValue) => setLeaveType(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Leave types"
                fullWidth
                margin="normal"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
