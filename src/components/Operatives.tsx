import React from "react";
import OperativeSelector from "./OperativeSelector";
import type { FireTeamType, OperativeType } from "../types/faction.type";

const Operators = ({
  fireTeam,
  operatives,
  setOperatives,
}: {
  fireTeam: FireTeamType;
  operatives: OperativeType[];
  setOperatives: (value: any) => void;
}) => {
  const amountOfOperatives = operatives.length;
  const operativesMarkup = [...Array(amountOfOperatives).keys()].map((i) => (
    <OperativeSelector
      key={i}
      index={i}
      fireTeam={fireTeam}
      operatives={operatives}
      setOperatives={setOperatives}
    />
  ));

  return (
    <div>
      <h5>Operatives</h5>
      {operativesMarkup}
      <OperativeSelector
        fireTeam={fireTeam}
        operatives={operatives}
        setOperatives={setOperatives}
      />
    </div>
  );
};

export default Operators;
