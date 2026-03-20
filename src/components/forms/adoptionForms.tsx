"use client";

import { UploadCloud } from "lucide-react";
import {
  AdoptionType,
  edadOptions,
  generoOptions,
  tamañoOptions,
} from "../types/commonTypes";
import { useState } from "react";
import { formatLabel } from "../common/commonFunctions";

type Props = {
  onSubmit: (data: AdoptionType) => void;
  onCancel: () => void;
};

export const AdoptionForm = ({ onSubmit, onCancel }: Props) => {
  const [formData, setFormData] = useState<Partial<AdoptionType>>({});
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 📸 Manejo de imagen
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    setFormData((prev) => ({
      ...prev,
      picture: imageUrl, // temporal (luego será upload real)
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Agregar adopción</h2>

      {/* Imagen */}
      <label className="w-full h- border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-emerald-500 transition overflow-hidden">
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />

        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <UploadCloud size={40} />
            <span className="text-sm mt-2">Subir imagen</span>
          </div>
        )}
      </label>

      <input
        name="name"
        placeholder="Nombre"
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        name="raza"
        placeholder="Raza"
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        name="location"
        placeholder="Ubicación"
        onChange={handleChange}
        className="border p-2 rounded"
      />

      {/* Tamaño */}
      <select
        name="tamaño"
        onChange={handleChange}
        className="border p-2 rounded"
      >
        {tamañoOptions.map((option) => (
          <option key={option} value={option}>
            {formatLabel(option)}
          </option>
        ))}
      </select>

      {/* Género */}
      <select
        name="genero"
        onChange={handleChange}
        className="border p-2 rounded"
      >
        {generoOptions.map((option) => (
          <option key={option} value={option}>
            {formatLabel(option)}
          </option>
        ))}
      </select>

      {/* Edad */}
      <select
        name="edad"
        onChange={handleChange}
        className="border p-2 rounded"
      >
        {edadOptions.map((option) => (
          <option key={option} value={option}>
            {formatLabel(option)}
          </option>
        ))}
      </select>

      {/* Botones */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={onCancel}
          className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancelar
        </button>

        <button
          onClick={() =>
            onSubmit({
              ...(formData as AdoptionType),
              id: Date.now().toString(),
              status: "adopcion",
            })
          }
          className="flex-1 bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition"
        >
          Guardar
        </button>
      </div>
    </div>
  );
};
