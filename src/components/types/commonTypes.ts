export type AdoptionStatus = "adopcion" | "espera" | "adoptado";
export type GenderType = (typeof generoOptions)[number];
export type AgeType = (typeof edadOptions)[number];
export type SizeType = (typeof tamañoOptions)[number];
export type AssociationType = (typeof associationOptions)[number];

export type AdoptionType = {
  id: string;
  picture: string;
  name: string;
  raza: string;
  tamaño: SizeType;
  asociacion?: AssociationType;
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

export const generoOptions = ["macho", "hembra"] as const;

export const edadOptions = [
  "0-6meses",
  "6meses-1año",
  "1año-5años",
  "+5años",
] as const;

export const tamañoOptions = ["mini", "pequeño", "mediano", "grande"] as const;

// Filtros
export type FilterCategory = "genero" | "edad" | "tamaño" | "location";

export const associationOptions = [
  "arani",
  "urban dog santuary",
  "fundacion huellitas",
] as const;

export type FilterGroupType<T> = {
  title: string;
  options: readonly T[];
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
