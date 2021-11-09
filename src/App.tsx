import React from "react";
import "./App.css";
import { AiOutlineRotateLeft } from "react-icons/ai";
import { BsFillLightningChargeFill, BsFillShieldFill } from "react-icons/bs";
import { ImCogs } from "react-icons/im";
import { IoMedkitSharp } from "react-icons/io5";
import { GiCrestedHelmet } from "react-icons/gi";
import characters from "./__mocks__/characters";
import type { AbilityType, UnitType, WeaponType } from "./types";

const Abilities = ({ abilities }: { abilities: AbilityType[] }) => {
  const abilitiesMarkup = abilities.map(({ name, descr }, index) => {
    return (
      <div className="ability">
        <h3 className="title">{name}</h3>
        {descr && <p>{descr}</p>}
      </div>
    );
  });

  return <div className="abilities">{abilitiesMarkup}</div>;
};

const Weapons = ({ weapons }: { weapons: WeaponType[] }) => {
  const weaponsMarkup = weapons.map(({ name, a, bsws, d, sr, i }, index) => {
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{a}</td>
        <td>{bsws}+</td>
        <td>{d}</td>
        <td>{sr}</td>
        <td>{i}</td>
      </tr>
    );
  });

  return (
    <div className="weapons">
      <table>
        <tr>
          <th>Weapon Name</th>
          <th>A</th>
          <th>BS/WS</th>
          <th>D</th>
          <th>SR</th>
          <th>!</th>
        </tr>
        <tbody>{weaponsMarkup}</tbody>
      </table>
    </div>
  );
};

const Card = ({ unit }: { unit: UnitType }) => {
  const {
    name,
    type,
    stats: { m, apl, df, ga, sv, w },
    weapons,
    abilities,
    image,
  } = unit;
  return (
    <div className="card">
      <header style={{ backgroundImage: `url(${image})` }}>
        <h1 className="title">{name}</h1>
        <h3 className="sub-title">{type}</h3>
      </header>
      <main>
        <div className="stats-container">
          <div className="stats" style={{ height: "75px" }}></div>
          <div className="stats">
            <div>
              <div className="stat m">
                <AiOutlineRotateLeft className="stat-icon" size={50} />
                <span className="stat-characteristic">M</span>
                <span className="stat-value">{m}</span>
              </div>
            </div>
            <div>
              <div className="stat apl">
                <span className="stat-value">{apl}</span>
                <span className="stat-characteristic">APL</span>
                <BsFillLightningChargeFill className="stat-icon" size={40} />
              </div>
            </div>
          </div>
          <div className="stats darker">
            <div>
              <div className="stat df">
                <BsFillShieldFill className="stat-icon" size={40} />
                <span className="stat-characteristic">DF</span>
                <span className="stat-value">{df}</span>
              </div>
            </div>
            <div>
              <div className="stat ga">
                <span className="stat-value">{ga}</span>
                <span className="stat-characteristic">GA</span>
                <ImCogs className="stat-icon" size={40} />
              </div>
            </div>
          </div>
          <div className="stats darkest">
            <div>
              <div className="stat sv">
                <IoMedkitSharp className="stat-icon" size={40} />
                <span className="stat-characteristic">SV</span>
                <span className="stat-value">{sv}+</span>
              </div>
            </div>
            <div>
              <div className="stat w">
                <span className="stat-value">{w}</span>
                <span className="stat-characteristic">W</span>
                <GiCrestedHelmet className="stat-icon" size={45} />
              </div>
            </div>
          </div>
        </div>
        <Weapons weapons={weapons} />
        {abilities && <Abilities abilities={abilities} />}
      </main>
    </div>
  );
};

function App() {
  const charsMarkup = characters.map((char) => {
    return <Card key={char.id} unit={char} />;
  });
  return <div className="container">{charsMarkup}</div>;
}

export default App;
