import { Shape } from "./types";

export const shapes: Shape[] = [
  {
    name: "C",
    notes: [
      [{ col: 0, type: "terca" }],
      [{ col: 1, type: "tonica" }],
      [{ col: 0, type: "quinta" }],
      [{ col: 2, type: "terca" }],
      [{ col: 3, type: "tonica" }],
      [],
    ],
  },
  {
    name: "A",
    notes: [
      [{ col: 0, type: "quinta" }],
      [{ col: 2, type: "terca" }],
      [{ col: 2, type: "tonica" }],
      [{ col: 2, type: "quinta" }],
      [{ col: 0, type: "tonica" }],
      [],
    ],
  },
  {
    name: "G",
    notes: [
      [{ col: 3, type: "tonica" }],
      [{ col: 0, type: "terca" }],
      [{ col: 0, type: "tonica" }],
      [{ col: 0, type: "quinta" }],
      [{ col: 2, type: "terca" }],
      [{ col: 3, type: "tonica" }],
    ],
  },
  {
    name: "E",
    notes: [
      [{ col: 0, type: "tonica" }],
      [{ col: 0, type: "quinta" }],
      [{ col: 1, type: "terca" }],
      [{ col: 2, type: "tonica" }],
      [{ col: 2, type: "quinta" }],
      [{ col: 0, type: "tonica" }],
    ],
  },
  {
    name: "D",
    notes: [
      [{ col: 2, type: "terca" }],
      [{ col: 3, type: "tonica" }],
      [{ col: 2, type: "quinta" }],
      [{ col: 0, type: "tonica" }],
      [],
      [],
    ],
  },
];

export const strings = [
  "E (1ª)",
  "B (2ª)",
  "G (3ª)",
  "D (4ª)",
  "A (5ª)",
  "E (6ª)",
];
