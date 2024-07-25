import { AdoptionCard } from "./components/animalCard/adoptionCard";
import { AdoptionData } from "./components/data/adoptionData";

export default function Home() {
  AdoptionData;
  return (
    <div className="h-screen p-8">
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="border-2 rounded-2xl">
          {AdoptionData.map(({ id, picture, name, age, description }) => {
            return (
              <AdoptionCard
                key={id}
                id={id}
                picture={picture}
                name={name}
                age={age}
                description={description}
              />
            );
          })}
        </div>
        <div className="grid grid-rows-2 gap-4 h-full">
          <div className="border-2 rounded-2xl">2</div>
          <div className="border-2 rounded-2xl">3</div>
        </div>
      </div>
    </div>
  );
}
