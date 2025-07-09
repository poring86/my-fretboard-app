import { ShapeType } from "./types";

export const getColor = (type: ShapeType) => {
  const colors: Record<ShapeType, string> = {
    tonica: "bg-red-500",
    terca: "bg-blue-500",
    quinta: "bg-yellow-400",
  };
  return colors[type];
};
