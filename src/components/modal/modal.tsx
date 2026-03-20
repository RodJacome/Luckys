"use client";

import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg p-6 z-10">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
};
