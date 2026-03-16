import { AdoptionCard } from "@/src/components/animalCard/adoptionCard";
import { AdoptionData } from "@/src/components/data/adoptionData";
import { NavBar } from "@/src/components/navBar/navBar";

export default function AdoptionPage() {
  return (
    <>
      <NavBar />
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4 h-full">
          {AdoptionData.map((animal) => {
            return <AdoptionCard key={animal.id} {...animal} />;
          })}
        </div>
      </div>
    </>
  );
}
