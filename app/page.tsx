import { HeroSeccion } from "@/src/components/heroSeccion/heroSection";
import { AdoptionCard } from "../src/components/animalCard/adoptionCard";
import { AdoptionData } from "../src/components/data/adoptionData";
import { HomeImage } from "../src/components/homeImage/homeImage";
import { NavBar } from "../src/components/navBar/navBar";
import { Carousel } from "@/src/components/carousel/carousel";
import { CarouselData } from "@/src/components/data/carouselData";

export default function Home() {
  return (
    <div className="h-full bg-stone-50">
      <NavBar />
      <HeroSeccion />
      <Carousel />;
    </div>
  );
}
