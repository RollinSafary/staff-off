import React, { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import FilterField from "./FilterField";
import FilterMultiSelect from "./FilterMultiSelect";
import FilterActions from "./FilterActions";
import { Translations } from "@/constants/translations";
import { useTranslation } from "react-i18next";
import { Filters } from "./filterTypes";
import { multiSelectConfigs } from "./filterMultiSelectConfigs";

import { InitialFilters } from "./filterInitialState";

const FilterCard: React.FC = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<Filters>(InitialFilters);

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
    setFilters(InitialFilters);
  };

  return (
    <Card sx={{ p: 2, m: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <FilterField
            label={t(Translations.PAGE_EMPLOYEES_FILTER_NAME)}
            value={filters.name}
            onChange={handleInputChange("name")}
          />

          {multiSelectConfigs.map(({ key, label, options }) => (
            <FilterMultiSelect
              key={key}
              label={t(label)}
              options={options}
              value={filters[key]}
              onChange={handleMultiSelectChange(key as keyof Filters)}
            />
          ))}

          <FilterActions onReset={handleReset} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
