export type ShapeType = "tonica" | "terca" | "quinta";

export interface Note {
  col: number;
  type: ShapeType;
}

export interface Shape {
  name: string;
  notes: Note[][];
}
