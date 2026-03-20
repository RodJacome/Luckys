export type AdoptionStatus = "adopcion" | "espera" | "adoptado";
export type GenderType = "macho" | "hembra";
export type AgeType = "0-6meses" | "6meses-1año" | "1año-5años" | "+5años";
export type SizeType = "mini" | "pequeño" | "mediano" | "grande";
export type AsociationType =
  | "arani"
  | "urban dog santuary"
  | "fundacion huellitas";

export type AdoptionType = {
  id: string;
  picture: string;
  name: string;
  raza: string;
  tamaño: SizeType;
  asociacion?: AsociationType;
  status: AdoptionStatus;
  location: string;
  genero: GenderType;
  edad: AgeType;
  especial?: string;
};

export type CarouselType = {
  id: string;
  picture: string;
  title: string;
  description: string;
  url: string;
};

export const generoOptions: GenderType[] = ["macho", "hembra"];

export const edadOptions: AgeType[] = [
  "0-6meses",
  "6meses-1año",
  "1año-5años",
  "+5años",
];
export const tamañoOptions: SizeType[] = [
  "mini",
  "pequeño",
  "mediano",
  "grande",
];

// Filtros
export type FilterCategory = "genero" | "edad" | "tamaño" | "location";

export type FilterGroupType<T> = {
  title: string;
  options: T[];
  category: FilterCategory;
  handleCheckbox: (
    category: FilterCategory,
    value: T,
    checked: boolean,
  ) => void;
};

export type FiltersType = {
  genero: GenderType[];
  edad: AgeType[];
  tamaño: SizeType[];
  location: string[];
};
