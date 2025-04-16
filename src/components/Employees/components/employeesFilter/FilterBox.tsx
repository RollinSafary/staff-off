import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import FilterField from "./FilterField";
import FilterMultiSelect from "./FilterMultiSelect";
import FilterActions from "./FilterActions";

type Filters = {
  name: string;
  team: string[];
  leavePolicy: string[];
  location: string[];
  role: string[];
  accountStatus: string;
};

const roles = ["Manager", "Developer", "Designer"];
const teams = ["Team A", "Team B", "Team C"];
const locations = ["NYC", "Berlin", "Tokyo"];
const leavePolicies = ["Standard", "Flexible", "Unlimited"];

const FilterCard: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    name: "",
    team: [],
    leavePolicy: [],
    location: [],
    role: [],
    accountStatus: "Active",
  });

  const handleMultiSelectChange =
    (field: keyof Filters) =>
    (_: React.SyntheticEvent<Element, Event>, value: string[]) => {
      setFilters((prev) => ({ ...prev, [field]: value }));
    };

  const handleInputChange =
    (field: keyof Filters) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleReset = () => {
    setFilters({
      name: "",
      team: [],
      leavePolicy: [],
      location: [],
      role: [],
      accountStatus: "Active",
    });
  };

  return (
    <Card sx={{ p: 2, m: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <FilterField
            label="Name"
            value={filters.name}
            onChange={handleInputChange("name")}
          />

          <FilterMultiSelect
            label="Team"
            options={teams}
            value={filters.team}
            onChange={handleMultiSelectChange("team")}
          />

          <FilterMultiSelect
            label="Leave Policy"
            options={leavePolicies}
            value={filters.leavePolicy}
            onChange={handleMultiSelectChange("leavePolicy")}
          />

          <FilterMultiSelect
            label="Location"
            options={locations}
            value={filters.location}
            onChange={handleMultiSelectChange("location")}
          />

          <FilterMultiSelect
            label="Role"
            options={roles}
            value={filters.role}
            onChange={handleMultiSelectChange("role")}
          />

          <FilterActions onReset={handleReset} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
