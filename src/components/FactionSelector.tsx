import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import type { FactionType } from "../types/faction.type";

const FactionSelector = ({
  factions,
  faction,
  setFaction,
}: {
  factions: FactionType[];
  faction?: FactionType;
  setFaction: (value: any) => void;
}) => {
  const handleChange = (event: any) => {
    const factionId = event.target.value;
    const selectedFaction = factions.find((f) => f.factionid === factionId);
    if (selectedFaction) {
      setFaction(selectedFaction);
    }
  };

  const factionsItem = factions.map((faction, key) => {
    return (
      <MenuItem key={faction.factionid} value={faction.factionid}>
        {faction.factionname}
      </MenuItem>
    );
  });

  return (
    <Box
      sx={{
        width: 300,
        p: 1,
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Faction</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={faction ? faction.factionid : ""}
          label="Faction"
          onChange={handleChange}
        >
          {factionsItem}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FactionSelector;
