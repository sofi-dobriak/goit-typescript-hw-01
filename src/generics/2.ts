type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(top: AllType, bottom: AllType): AllType {
  return {
    name: top.name,
    position: bottom.position,
    color: top.color,
    weight: bottom.weight,
  };
}
