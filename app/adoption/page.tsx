"use client";

import { AdoptionCard } from "@/src/components/animalCard/adoptionCard";
import { FilterGroup } from "@/src/components/common/filterGroup";
import { AdoptionData } from "@/src/components/data/adoptionData";
import { AdoptionForm } from "@/src/components/forms/adoptionForms";
import { Modal } from "@/src/components/modal/modal";
import {
  edadOptions,
  FiltersType,
  generoOptions,
  tamañoOptions,
} from "@/src/components/types/commonTypes";
import { useState } from "react";

export default function AdoptionPage() {
  const [filters, setFilters] = useState<FiltersType>({
    genero: [],
    edad: [],
    tamaño: [],
    location: [],
  });

  const handleCheckbox = <T extends string>(
    category: keyof FiltersType,
    value: T,
    checked: boolean,
  ) => {
    setFilters((prev) => {
      const currentValues = prev[category] as T[];

      return {
        ...prev,
        [category]: checked
          ? [...currentValues, value]
          : currentValues.filter((item) => item !== value),
      };
    });
  };

  const filteredAnimals = AdoptionData.filter((animal) => {
    return (
      (filters.genero.length === 0 || filters.genero.includes(animal.genero)) &&
      (filters.edad.length === 0 || filters.edad.includes(animal.edad)) &&
      (filters.tamaño.length === 0 || filters.tamaño.includes(animal.tamaño))
    );
  });

  /// Implementacion de agregar Cards
  const [openForm, setOpenForm] = useState(false);

  const [animals, setAnimals] = useState(AdoptionData);

  return (
    <>
      <div className="w-full px-10 pt-4">
        <div className="sm:grid sm:grid-cols-5">
          <FilterGroup
            title="Género"
            options={generoOptions}
            category="genero"
            handleCheckbox={handleCheckbox}
          />

          <FilterGroup
            title="Edad"
            options={edadOptions}
            category="edad"
            handleCheckbox={handleCheckbox}
          />

          <FilterGroup
            title="Tamaño"
            options={tamañoOptions}
            category="tamaño"
            handleCheckbox={handleCheckbox}
          />
        </div>
      </div>

      <button
        onClick={() => setOpenForm(true)}
        className="bg-emerald-500 text-white mx-10 px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
      >
        + Agregar adopción
      </button>
      <Modal isOpen={openForm} onClose={() => setOpenForm(false)}>
        <AdoptionForm
          onSubmit={(data) => {
            setAnimals((prev) => [...prev, data]);
            setOpenForm(false);
          }}
          onCancel={() => setOpenForm(false)}
        />
      </Modal>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-4 h-full">
          {filteredAnimals.map((animal) => {
            return <AdoptionCard key={animal.id} {...animal} />;
          })}
        </div>
      </div>
    </>
  );
}
