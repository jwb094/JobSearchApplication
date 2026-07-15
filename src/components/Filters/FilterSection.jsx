import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function FilterSection({ title, options }) {
  return (
    <>
    <div className="bg-white my-6 p-6">

      <h6>{title}</h6>
      {options.map((job) => (
        <FilterCheckbox key={job.id} id={job.id} label={job.label} />
      ))}
    </div>
    </>
  );
}

export default FilterSection;
