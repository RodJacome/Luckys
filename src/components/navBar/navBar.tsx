"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Briefcase,
  Users,
  HeartHandshake,
  Phone,
  LogIn,
  DogIcon,
  Menu,
  X,
  User,
} from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-full px-4 md:px-10 h-20 md:h-28 flex items-center justify-between">
        {/* ☰ Mobile */}
        <button onClick={() => setIsOpen(true)} className="xl:hidden">
          <Menu size={26} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mx-auto md:mx-0">
          <Image src="/logo.png" alt="Rescue App" width={40} height={40} />
          <span className="font-bold text-lg text-emerald-600 hidden md:block">
            Luckys
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center justify-between gap-10 lg:gap-4 xl:gap-6 2xl:gap-24 xl:text-lg 2xl:text-lg  text-gray-700">
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

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Donar */}
          <Link
            href="/donar"
            className="flex items-center gap-2 text-white bg-orange-500 px-3 py-2 lg:px-4 rounded-lg hover:bg-orange-600 transition"
          >
            <HeartHandshake size={18} />
            <span className="hidden sm:inline">Donar</span>
          </Link>

          {/* 👤 Mobile */}
          <Link href="/login" className="md:hidden text-gray-700">
            <User size={24} />
          </Link>

          {/* Desktop login */}
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition"
          >
            <LogIn size={18} />
            Iniciar sesión
          </Link>
        </div>
      </div>

      {/* 🧊 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-emerald-600">Menú</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-6 text-gray-700">
          <Link href="/trabajo" onClick={() => setIsOpen(false)}>
            Nuestro trabajo
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            Acerca de nosotros
          </Link>

          <Link href="/ayudar" onClick={() => setIsOpen(false)}>
            Maneras de ayudar
          </Link>

          <Link href="/contacto" onClick={() => setIsOpen(false)}>
            Contactos
          </Link>

          <Link href="/adoption" onClick={() => setIsOpen(false)}>
            Adopta
          </Link>

          {/* Extra: Donar dentro del menú (pro UX) */}
          <Link
            href="/donar"
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center"
          >
            Donar
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </nav>
  );
};
