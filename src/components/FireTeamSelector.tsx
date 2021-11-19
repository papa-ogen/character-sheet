import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { KillTeamType, FireTeamType } from "../types/faction.type";

const FireTeamSelector = ({
  index,
  killTeam,
  fireTeam,
  setFireTeam,
}: {
  index: number;
  killTeam: KillTeamType;
  fireTeam?: FireTeamType;
  setFireTeam: (value: any) => void;
}) => {
  const handleChange = (event: any) => {
    const fireTeamId = event.target.value;
    const selectedFireTeam = killTeam.fireteams.find(
      (ft) => ft.fireteamid === fireTeamId
    );
    if (selectedFireTeam) {
      setFireTeam(selectedFireTeam);
    }
  };

  const fireTeamItems = killTeam.fireteams.map((ft, key) => {
    return (
      <MenuItem key={ft.fireteamid} value={ft.fireteamid}>
        {ft.fireteamname}
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
        <InputLabel id="demo-simple-select-label">Select Fire Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={`fireteam-selector-${index}`}
          value={fireTeam ? fireTeam.fireteamid : ""}
          label="Fire Team"
          onChange={handleChange}
        >
          {fireTeamItems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FireTeamSelector;
