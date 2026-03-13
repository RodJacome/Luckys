import Image from "next/image";

type AdoptionType = {
  id: string;
  picture: string;
  name: string;
  raza: string;
  tamaño: string;
  asociacion?: string;
  //   information: () => void;
  //   adoption: () => void;
};

export const AdoptionCard = ({
  id,
  picture,
  name,
  raza,
  asociacion,
  tamaño,
}: AdoptionType) => {
  return (
    <div id={id} className="h-full w-full p-4">
      <div className="w-full border-2 rounded-lg h-96 flex items-center justify-center">
        <Image src={picture} alt="dog" width={280} height={100} />
      </div>
      <div className="flex flex-col items-center justify-center pt-4">
        <h2 className="font-bold">{name}</h2>
        <h2>
          {raza} / {tamaño}
        </h2>
      </div>
      <div className="flex justify-between">
        {/* <Image src={""} alt="" width={1} height={2} /> */}
        <button className="p-2 uppercase">{asociacion}</button>
      </div>
    </div>
  );
};
