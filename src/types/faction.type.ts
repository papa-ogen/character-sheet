export type StratPloys = {
  factionid: string;
  killteamid: string;
  ployid: string;
  ployname: string;
  ploytype: string;
  CP: string;
  description: string;
};

export type TacPloys = {
  factionid: string;
  killteamid: string;
  ployid: string;
  ployname: string;
  ploytype: string;
  CP: string;
  description: string;
};

export type EquipmentType = {
  factionid: string;
  killteamid: string;
  eqid: string;
  eqname: string;
  eqdescription: string;
  eqpts: string;
};
export type OperativeType = {
  APL: string;
  DF: string;
  GA: string;
  M: string;
  SV: string;
  W: string;
  abilities: any;
  description: string;
  factionid: string;
  fireteamid: string;
  fireteammax: number;
  keywords: string;
  killteamid: string;
  opid: string;
  opname: string;
  uniqueactions: any;
  weapons: any;
};

export type FireTeamType = {
  factionid: string;
  killteamid: string;
  fireteamid: string;
  fireteamname: string;
  archetype: string;
  description: string | null;
  killteammax: number;
  operatives: OperativeType[];
  fireteamcomp: string;
};

export type KillTeamType = {
  factionid: string;
  killteamid: string;
  killteamname: string;
  description: string;
  ploys: {
    strat: StratPloys[];
    tac: TacPloys[];
  };
  equipments: EquipmentType[];
  killteamcomp: string;
  fireteams: FireTeamType[];
};

export type FactionType = {
  factionid: string;
  factionname: string;
  description: string;
  killteams: KillTeamType[];
};
