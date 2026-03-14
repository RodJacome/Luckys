import Image from "next/image";
import Link from "next/link";
import { AdoptionType } from "../types/commonTypes";

export const AdoptionCard = ({
  id,
  picture,
  name,
  raza,
  asociacion,
  tamaño,
  status,
  location,
}: AdoptionType) => {
  return (
    <div
      id={id}
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1`}
    >
      <div
        className={`relative w-full h-96 overflow-hidden ${
          status === "adoptado" ? "grayscale opacity-70" : ""
        }`}
      >
        <Image
          src={picture}
          alt={`Foto de ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              status === "adopcion"
                ? "bg-emerald-100 text-emerald-700"
                : status === "espera"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-gray-200 text-gray-600"
            }`}
          >
            {status === "adopcion" && "En adopción"}
            {status === "espera" && "En espera"}
            {status === "adoptado" && "Adoptado"}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          {raza} / Talla: {tamaño}
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            📍 {location}
          </span>
          {asociacion ? (
            <Link
              href={`/asociaciones/${asociacion}`}
              className="text-xs bg-emerald-100 text-emerald-700 hover:bg-orange-400 px-3 py-1 rounded-full"
            >
              {asociacion}
            </Link>
          ) : (
            <div className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
              Reportado por usuario
            </div>
          )}
        </div>
        <button
          disabled
          className={`mt-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 rounded-lg transition ${status === "adoptado" ? "cursor-not-allowed bg-gray-200 hover:bg-gray-200" : "cursor-pointer"}`}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};
