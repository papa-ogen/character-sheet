import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { FireTeamType, OperativeType } from "../types/faction.type";

const OperatorSelector = ({
  index = -1,
  fireTeam,
  operatives,
  setOperatives,
}: {
  index?: number;
  fireTeam: FireTeamType;
  operatives: OperativeType[];
  setOperatives: (value: any) => void;
}) => {
  const handleChange = (event: any) => {
    const opId = event.target.value;

    // Delete
    if (opId === "") {
      const updatedOperatives = operatives.filter((op, i) => i !== index);

      setOperatives(updatedOperatives);

      return;
    }

    const selectedOperative = fireTeam.operatives.find(
      (op) => op.opid === opId
    );

    if (selectedOperative) {
      if (!operatives.length) {
        setOperatives([selectedOperative]);

        return;
      }

      // replace if operative exist on index
      if (index !== -1 && operatives[index] !== undefined) {
        const updatedOperatives = operatives.map((op, i) => {
          if (i === index) return selectedOperative;
          return op;
        });

        setOperatives(updatedOperatives);

        return;
      } else {
        setOperatives([...operatives, selectedOperative]);
      }
    }
  };

  const operativesItems = fireTeam.operatives.map((op, key) => {
    return (
      <MenuItem key={op.opid} value={op.opid}>
        {op.opname}
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
        <InputLabel id="demo-simple-select-label">Select Operative</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={`operative-selector-${index}`}
          value={index !== -1 ? operatives[index].opid : ""}
          label="Operative Team"
          onChange={handleChange}
        >
          <MenuItem value="">Select Operative </MenuItem>
          {operativesItems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default OperatorSelector;
