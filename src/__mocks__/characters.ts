import type { UnitType } from "../types";

export const characters: UnitType[] = [
  {
    id: "1",
    name: "Jörgen Thelin",
    type: "Plague Marine",
    stats: {
      m: 3,
      apl: 2,
      df: 3,
      ga: 2,
      sv: 5,
      w: 7,
    },
    weapons: [
      {
        name: "lasgun",
        a: 4,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "bayonet",
        a: 3,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "laspistol",
        a: 4,
        bsws: 4,
        d: "2/3",
        sr: "rng",
      },
    ],
    abilities: [
      {
        name: "Disgustingly Resilient",
        descr:
          "Each time this operative would lose a wound, roll one D6: on a 5+, that wound is not lost. Other than the effects of Battle Scars, this operative cannot be injured.",
      },
    ],
    image:
      "https://www.games-workshop.com/resources/catalog/product/920x950/99120102117_DGLordofVirulenceLead.jpg",
  },
  {
    id: "2",
    name: "Love Grönwall",
    type: "Veteran Guardsman",
    stats: {
      m: 3,
      apl: 2,
      df: 3,
      ga: 2,
      sv: 5,
      w: 7,
    },
    weapons: [
      {
        name: "lasgun",
        a: 4,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "bayonet",
        a: 3,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "laspistol",
        a: 4,
        bsws: 4,
        d: "2/3",
        sr: "rng",
      },
    ],
    image:
      "https://i.pinimg.com/originals/09/83/d4/0983d4c69b3a98916d48fcd4d8c24f83.jpg",
  },
  {
    id: "3",
    name: "Patrick Wärmé",
    type: "Veteran Guardsman",
    stats: {
      m: 3,
      apl: 2,
      df: 3,
      ga: 2,
      sv: 5,
      w: 7,
    },
    weapons: [
      {
        name: "lasgun",
        a: 4,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "bayonet",
        a: 3,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "laspistol",
        a: 4,
        bsws: 4,
        d: "2/3",
        sr: "rng",
      },
    ],
    image:
      "https://www.games-workshop.com/resources/catalog/product/920x950/99800103014_BossSnikrotNEW01.jpg",
  },
  {
    id: "4",
    name: "Didde Drake",
    type: "Tau Warrior",
    stats: {
      m: 3,
      apl: 2,
      df: 3,
      ga: 2,
      sv: 5,
      w: 7,
    },
    weapons: [
      {
        name: "lasgun",
        a: 4,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "bayonet",
        a: 3,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "laspistol",
        a: 4,
        bsws: 4,
        d: "2/3",
        sr: "rng",
      },
    ],
    image:
      "https://i.pinimg.com/originals/b7/85/32/b78532419ea82dd3c45afd591aa31ef5.jpg",
  },
  {
    id: "5",
    name: "Russel",
    type: "Plague Marine",
    stats: {
      m: 2,
      apl: 3,
      df: 3,
      ga: 1,
      sv: 3,
      w: 8,
    },
    weapons: [
      {
        name: "lasgun",
        a: 4,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "bayonet",
        a: 3,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "laspistol",
        a: 4,
        bsws: 4,
        d: "2/3",
        sr: "rng",
      },
    ],
    abilities: [
      {
        name: "Disgustingly Resilient",
        descr:
          "Each time this operative would lose a wound, roll one D6: on a 5+, that wound is not lost. Other than the effects of Battle Scars, this operative cannot be injured.",
      },
      {
        name: "Icon Bearer",
        descr:
          "When determining control of an objective marker, treat this operative's APL as being 1 higher. Note that this is not a modifier. In narrative play, this is cumulative with the Focused Battle Honour (see the Kill Team Core Book)",
      },
    ],
    image:
      "https://www.games-workshop.com/resources/catalog/product/920x950/99120102117_DGLordofVirulenceLead.jpg",
  },
  {
    id: "6",
    name: "Trooper Veteran",
    type: "Veteran Guardsman",
    stats: {
      m: 3,
      apl: 2,
      df: 3,
      ga: 2,
      sv: 5,
      w: 7,
    },
    weapons: [
      {
        name: "lasgun",
        a: 4,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "bayonet",
        a: 3,
        bsws: 4,
        d: "2/3",
      },
      {
        name: "laspistol",
        a: 4,
        bsws: 4,
        d: "2/3",
        sr: "rng",
      },
    ],
    image:
      "https://i.pinimg.com/736x/7f/32/76/7f327684a0acf2520d1170381b3fc986.jpg",
  },
];

export default characters;
