import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { FactionType, KillTeamType } from "../types/faction.type";

const KillTeamSelector = ({
  faction,
  killTeam,
  setKillTeam,
}: {
  faction: FactionType;
  killTeam?: KillTeamType;
  setKillTeam: (value: any) => void;
}) => {
  const handleChange = (event: any) => {
    const killTeamId = event.target.value;
    const selectedKillTeam = faction.killteams.find(
      (kt) => kt.killteamid === killTeamId
    );
    if (selectedKillTeam) {
      setKillTeam(selectedKillTeam);
    }
  };

  const killTeamItems = faction.killteams.map((killteam, key) => {
    return (
      <MenuItem key={killteam.killteamid} value={killteam.killteamid}>
        {killteam.killteamname}
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
        <InputLabel id="demo-simple-select-label">Select Kill Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={killTeam ? killTeam.killteamid : ""}
          label="Kill Team"
          onChange={handleChange}
        >
          {killTeamItems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default KillTeamSelector;
