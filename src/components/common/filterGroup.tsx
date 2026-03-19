"use client";

import { FilterGroupType } from "../types/commonTypes";

export const FilterGroup = <T extends string>({
  title,
  options,
  category,
  handleCheckbox,
}: FilterGroupType<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-gray-800">{title}</h2>

      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 text-sm w-max">
          <input
            type="checkbox"
            onChange={(e) => handleCheckbox(category, option, e.target.checked)}
            className="accent-emerald-600"
          />
          {option}
        </label>
      ))}
    </div>
  );
};
