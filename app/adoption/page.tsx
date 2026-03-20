"use client";

import { AdoptionCard } from "@/src/components/animalCard/adoptionCard";
import { FilterGroup } from "@/src/components/common/filterGroup";
import { AdoptionData } from "@/src/components/data/adoptionData";
import { NavBar } from "@/src/components/navBar/navBar";
import {
  AgeType,
  FiltersType,
  GenderType,
  SizeType,
} from "@/src/components/types/commonTypes";
import { useState } from "react";

export default function AdoptionPage() {
  const [filters, setFilters] = useState<FiltersType>({
    genero: [],
    edad: [],
    tamaño: [],
    location: [],
  });

  const generoOptions: GenderType[] = ["macho", "hembra"];

  const edadOptions: AgeType[] = [
    "0-6meses",
    "6meses-1año",
    "1año-5años",
    "+5años",
  ];
  const tamañoOptions: SizeType[] = ["pequeño", "mediano", "grande"];

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

  return (
    <>
      <NavBar />
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
