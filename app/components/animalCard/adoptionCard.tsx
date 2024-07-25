import Image from "next/image";

type AdoptionType = {
  id: string;
  picture: string;
  name: string;
  age: number;
  description: string;
  //   information: () => void;
  //   adoption: () => void;
};

export const AdoptionCard = ({
  id,
  picture,
  name,
  age,
  description,
}: AdoptionType) => {
  return (
    <div id={id} className="h-full w-full p-4">
      <div className="border-2 rounded-3xl p-2">
        <div className="w-full border-2 h-96"></div>
        <div className="flex justify-between pt-4">
          <h2>Nombre: {name} </h2>
          <h2>Edad: {age} añitos</h2>
        </div>
        <div className="pt-8">{description}</div>
        <div className="flex justify-between pt-16">
          <button className="border-2 rounded-2xl p-2"> Más información</button>
          <button className="border-2 rounded-2xl p-2">Adopta</button>
        </div>
      </div>
    </div>
  );
};
