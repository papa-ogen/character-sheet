import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FactionSelector from "./components/FactionSelector";
import KillTeamSelector from "./components/KillTeamSelector";
import KillTeamDescription from "./components/KillTeamDescription";
import FireTeamSelector from "./components/FireTeamSelector";
import Operatives from "./components/Operatives";
import Characters from "./components/Characters";
import type {
  FactionType,
  KillTeamType,
  FireTeamType,
  OperativeType,
} from "./types/faction.type";
import factions from "./__mocks__/faction";

function App() {
  const [faction, setFaction] = React.useState<FactionType | undefined>();
  const [killTeam, setKillTeam] = React.useState<KillTeamType | undefined>();
  const [fireTeam, setFireTeam] = React.useState<FireTeamType | undefined>();
  const [fireTeam2, setFireTeam2] = React.useState<FireTeamType | undefined>();
  const [operatives, setOperatives] = React.useState<OperativeType[]>([]);
  const [operatives2, setOperatives2] = React.useState<OperativeType[]>([]);

  const [showPreview, setShowPreview] = React.useState<OperativeType[]>([]);

  const displayPreview = (op: OperativeType[]) => {
    if (!op.length) return;

    setShowPreview(op);
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Kill Team
      </Typography>
      <Box
        sx={{
          marginTop: 1,
          padding: 2,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid red",
        }}
      >
        <FactionSelector
          factions={factions}
          faction={faction}
          setFaction={setFaction}
        />
        {faction && (
          <KillTeamSelector
            faction={faction}
            killTeam={killTeam}
            setKillTeam={setKillTeam}
          />
        )}
      </Box>
      {/* {killTeam && <KillTeamDescription descr={killTeam.killteamcomp} />} */}
      {killTeam && (
        <div>
          <Box
            sx={{
              marginTop: 1,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid red",
            }}
          >
            <h3>Fire Team</h3>
            <Button
              onClick={() => displayPreview(operatives)}
              disabled={!fireTeam || !operatives.length}
            >
              Preiew
            </Button>
            <FireTeamSelector
              index={1}
              killTeam={killTeam}
              fireTeam={fireTeam}
              setFireTeam={setFireTeam}
            />
            {/* {fireTeam && <KillTeamDescription descr={fireTeam.fireteamcomp} />} */}
            {fireTeam && (
              <Operatives
                fireTeam={fireTeam}
                operatives={operatives}
                setOperatives={setOperatives}
              />
            )}
          </Box>
          <Box
            sx={{
              marginTop: 1,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid red",
            }}
          >
            <h3>Fire Team</h3>
            <Button
              onClick={() => displayPreview(operatives2)}
              disabled={!fireTeam2 || !operatives2.length}
            >
              Preiew
            </Button>
            <FireTeamSelector
              index={2}
              killTeam={killTeam}
              fireTeam={fireTeam2}
              setFireTeam={setFireTeam2}
            />
            {fireTeam && (
              <Operatives
                fireTeam={fireTeam}
                operatives={operatives2}
                setOperatives={setOperatives2}
              />
            )}
          </Box>
          {/* {fireTeam2 && <KillTeamDescription descr={fireTeam2.fireteamcomp} />} */}
        </div>
      )}
      {!!showPreview.length && <Characters operatives={operatives2} />}
    </Container>
  );
}

export default App;
