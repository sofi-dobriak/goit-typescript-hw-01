type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, 'name' | 'color'>;
type ButtomType = Pick<AllType, 'position' | 'weight'>;

function compare<T extends TopType, U extends ButtomType>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    position: bottom.position,
    color: top.color,
    weight: bottom.weight,
  };
}
