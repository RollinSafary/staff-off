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
  locations: string[];
  setLocations: (value: string[]) => void;
  setTarget: (value: "location") => void;
  locationOptions: string[];
}

const LocationOption: React.FC<Props> = ({
  target,
  locations,
  setLocations,
  setTarget,
  locationOptions,
}) => (
  <Box display="flex" alignItems="center" gap={2} mt={2} flexWrap="wrap">
    <FormControlLabel
      value="location"
      control={<Radio color="primary" />}
      label={t(Translations.PAGE_ANNOUNCEMENT_LOCATION)}
      sx={{ flexShrink: 0, minWidth: 100 }}
    />
    <Autocomplete
      multiple
      options={locationOptions}
      value={locations}
      onChange={(_, newValue) => {
        setLocations(newValue);
        setTarget("location");
      }}
      disabled={target !== "location"}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(Translations.PAGE_ANNOUNCEMENT_CHOOSE_LOCATION)}
        />
      )}
      sx={{ flexGrow: 1, minWidth: 250 }}
    />
  </Box>
);

export default LocationOption;
