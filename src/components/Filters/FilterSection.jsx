import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import { useState, createContext } from 'react';
// import { useFilterContext } from "../../context/Filters";
function FilterSection({ title, options,filterCategory,classStyle }) {

  return (
    <>
       <h6>{title}</h6>
    <div 
    
    className={classStyle ? `${classStyle} bg-white my-6 p-6` : "bg-white my-6 p-6" }>
      {options.map((job) => (
        <FilterCheckbox  category={filterCategory} key={job.id} id={job.id} label={job.label}  />
      ))}
    </div>
    </>
  );
}

export default FilterSection;
