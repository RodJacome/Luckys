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
    <div id={id} className="h-full w-full pt-2">
      <button className="w-full border-[1px] rounded-lg h-96 bg-gradient-to-t from-gray-300 to-gray-100 flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:-translate-y-2">
        <Image src={picture} alt="dog" width={280} height={100} />
      </button>
      <div className="flex flex-col items-center justify-center pt-2">
        <h2 className="font-bold">{name}</h2>
        <h2 className="text-gray-500">
          {raza} / {tamaño}
        </h2>
      </div>
      <div className="flex justify-between">
        {/* <Image src={""} alt="" width={1} height={2} /> */}
        <button className="py-2 px-4 uppercase hover:bg-yellow-300 bg-gray-300 border-[1px] rounded-lg">
          {asociacion}
        </button>
      </div>
    </div>
  );
};
