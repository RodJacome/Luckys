import { AdoptionCard } from "./components/animalCard/adoptionCard";
import { AdoptionData } from "./components/data/adoptionData";
import { HomeImage } from "./components/homeImage/homeImage";
import { NavBar } from "./components/navBar/navBar";

export default function Home() {
  AdoptionData;
  return (
    <div className="h-full font-mono bg-gray-100">
      <div className="h-full p-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 h-full">
          {AdoptionData.map(
            ({ id, picture, name, raza, asociacion, tamaño }) => {
              return (
                <AdoptionCard
                  key={id}
                  id={id}
                  picture={picture}
                  name={name}
                  raza={raza}
                  asociacion={asociacion}
                  tamaño={tamaño}
                />
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
