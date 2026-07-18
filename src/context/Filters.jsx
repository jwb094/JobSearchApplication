import { createContext, useContext, useState } from "react";

export const FiltersContext = createContext(undefined);

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    jobType: [],
    salaries: [],
    experience: [],
    location: [],
  });

  const initialFilters = {
  jobType: [],
  salaries: [],
  experience: [],
  location: [],
};

  //const [filterSearchParams, setFilterSearchParams] = useState("");

  // function updateFiltersParams(filters) {

  //   let filterURL = "";
  //   if (filters.jobType.length > 0) {
  //     filterURL = filterURL.concat("?JobType=" + filters.jobType.join(","));
  //   }
  //   if (filters.salaries.length > 0) {
  //     filterURL = filterURL.concat("?salary_min=" + filters.salaries.join(","));
  //   }
  //   if (filters.experience.length > 0) {
  //     filterURL = filterURL.concat(
  //       "?experience=" + filters.experience.join(","),
  //     );
  //   }
  //   if (filters.location.length > 0) {
  //     filterURL = filterURL.concat("?location=" + filters.location.join(","));
  //   }
  //   setFilterSearchParams(filterURL);
  //   return filterURL;
  // }

    const resetFilters = () => {
      setFilters(initialFilters);


    };
  const handleCheckboxChange = (category, value) => {
    setFilters((previous) => {
      const exists = previous[category].includes(value);

      return {
        ...previous,
        [category]: exists
          ? previous[category].filter((item) => item !== value)
          : [...previous[category], value],
      };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        handleCheckboxChange,
        resetFilters,
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
