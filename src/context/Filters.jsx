import { createContext, useContext, useState } from "react";

export const FiltersContext = createContext(undefined);

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    jobType: [],
    salaries: [],
    experience: [],
    location: [],
  });

  const handleCheckboxChange = (category, value) => {
    console.log(category);
    console.log(value);

    setFilters((previous) => {
          const exists = previous[category].includes(value);

          return {
              ...previous,
              [category]: exists
                  ? previous[category].filter(item => item !== value)
                  : [...previous[category], value]
          };
    });
  };
  console.log(filters);
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        handleCheckboxChange,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}
