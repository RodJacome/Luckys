export type AdoptionStatus = "adopcion" | "espera" | "adoptado";

export type AdoptionType = {
  id: string;
  picture: string;
  name: string;
  raza: string;
  tamaño: string;
  asociacion?: string;
  status: AdoptionStatus;
  location: string;
};

export type CarouselType = {
  id: string;
  picture: string;
  title: string;
  description: string;
  url: string;
};
