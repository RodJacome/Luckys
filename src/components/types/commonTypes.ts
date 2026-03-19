export type AdoptionStatus = "adopcion" | "espera" | "adoptado";
export type GenderType = "macho" | "hembra";
export type AgeType = "0-6meses" | "6meses-1año" | "1año-5años" | "+5años";
export type SizeType = "pequeño" | "mediano" | "grande";

export type AdoptionType = {
  id: string;
  picture: string;
  name: string;
  raza: string;
  tamaño: SizeType;
  asociacion?: string;
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
