import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import { useState, createContext } from 'react';
// import { useFilterContext } from "../../context/Filters";
function FilterSection({ title, options,filterCategory }) {

//  const {filter,setFilter,handleCheckboxChange} = useFilterContext();

  return (
    <>
    <div className="bg-white my-6 p-6">

      <h6>{title}</h6>
      {options.map((job) => (
        <FilterCheckbox  category={filterCategory} key={job.id} id={job.id} label={job.label}  />
      ))}
    </div>
    </>
  );
}

export default FilterSection;
