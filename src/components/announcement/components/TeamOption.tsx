import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";
import { t } from "i18next";
import { Translations } from "@/constants/translations";

interface Props {
  target: "all" | "location" | "team";
  teams: string[];
  setTeams: (value: string[]) => void;
  setTarget: (value: "team") => void;
  teamOptions: string[];
}

const TeamOption: React.FC<Props> = ({
  target,
  teams,
  setTeams,
  setTarget,
  teamOptions,
}) => (
  <Box display="flex" alignItems="center" gap={2} mt={2} flexWrap="wrap">
    <FormControlLabel
      value="team"
      control={<Radio color="primary" />}
      label={t(Translations.PAGE_ANNOUNCEMENT_TEAM)}
      sx={{ flexShrink: 0, minWidth: 100 }}
    />
    <Autocomplete
      multiple
      options={teamOptions}
      value={teams}
      onChange={(_, newValue) => {
        setTeams(newValue);
        setTarget("team");
      }}
      disabled={target !== "team"}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(Translations.PAGE_ANNOUNCEMENT_CHOOSE_TEAM)}
        />
      )}
      sx={{ flexGrow: 1, minWidth: 250 }}
    />
  </Box>
);

export default TeamOption;
