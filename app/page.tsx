import { HeroSeccion } from "@/src/components/heroSeccion/heroSection";
import { Carousel } from "@/src/components/carousel/carousel";

export default function Home() {
  return (
    <div className="h-full bg-stone-50">
      <HeroSeccion />
      <Carousel />;
    </div>
  );
}
