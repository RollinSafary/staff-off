import React from "react";
import { FormControl, RadioGroup } from "@mui/material";
import AllCompanyOption from "./AllCompanyOption";
import LocationOption from "./LocationOption";
import TeamOption from "./TeamOption";

interface Props {
  target: "all" | "location" | "team";
  setTarget: (value: "all" | "location" | "team") => void;
  locations: string[];
  setLocations: (value: string[]) => void;
  teams: string[];
  setTeams: (value: string[]) => void;
  locationOptions: string[];
  teamOptions: string[];
}

const TargetSelector: React.FC<Props> = ({
  target,
  setTarget,
  locations,
  setLocations,
  teams,
  setTeams,
  locationOptions,
  teamOptions,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(event.target.value as "all" | "location" | "team");
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={target} onChange={handleChange}>
        <AllCompanyOption />
        <LocationOption
          target={target}
          setTarget={setTarget}
          locations={locations}
          setLocations={setLocations}
          locationOptions={locationOptions}
        />
        <TeamOption
          target={target}
          setTarget={setTarget}
          teams={teams}
          setTeams={setTeams}
          teamOptions={teamOptions}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default TargetSelector;
