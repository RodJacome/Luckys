import Link from "next/link";
import Image from "next/image";

import {
  Briefcase,
  Users,
  HeartHandshake,
  Phone,
  LogIn,
  DogIcon,
} from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-full px-10 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Rescue App" width={40} height={40} />
          <span className="font-bold text-lg text-emerald-600">Luckys</span>
        </Link>
        <div>
          {/* Menu */}
          <div className="hidden md:flex items-center justify-between gap-24 text-gray-700">
            <Link
              href="/trabajo"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <Briefcase size={18} />
              Nuestro trabajo
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <Users size={18} />
              Acerca de nosotros
            </Link>

            <Link
              href="/ayudar"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <HeartHandshake size={18} />
              Maneras de ayudar
            </Link>

            <Link
              href="/contacto"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <Phone size={18} />
              Contactos
            </Link>
            <Link
              href="/adoption"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <DogIcon size={18} />
              Adopta
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/donar"
            className="flex items-center gap-2 text-white bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            <HeartHandshake size={18} />
            Donar
          </Link>
          {/* Login */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition"
          >
            <LogIn size={18} />
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};
