import Image from "next/image";

export const HeroSeccion = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src="/common/animals/dogs/heroImage.jpg"
        alt="Perros rescatados"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start ml-32">
        <div className="text-white flex-row justify-center items-center space-y-3">
          <h1 className="text-5xl font-thin text-start">
            Ayuda a cambiar <br />
            la vida de un perrito
          </h1>
          <p className="text-lg pt-4 font-goudy">
            Cada año, miles de perros son abandonados y terminan viviendo en las
            <br />
            calles, enfrentando hambre, enfermedades y peligro constante.
          </p>
          <p className="text-lg">
            Afortunadamente, cada vez más personas están tomando conciencia
            <br />
            sobre el bienestar animal y la importancia de actuar frente a esta
            realidad.
          </p>
          <p className="text-lg pb-4">
            La adopción responsable y la esterilización pueden cambiar esta
            <br />
            historia, ofreciendo una segunda oportunidad a cientos de perros que
            aún esperan un hogar.
          </p>
          <button className="flex flex-col items-center justify-center text-white bg-orange-500 w-36 h-36 rounded-full hover:bg-orange-600 transition delay-150 duration-300 ease-in-out hover:scale-110">
            <span className="text-xl">Leer más</span>
          </button>
        </div>
      </div>
    </section>
  );
};
