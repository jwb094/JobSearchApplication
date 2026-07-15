import React, { useState } from "react";
import FilterSection from "./Filters/FilterSection";
import { jobTypes, experience, locations, salaries } from "../data/filter";
function Filters(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      data-template="filters"
      data-view="default"
      className="c-filters | px-4 py-6  bg-teal-400"
    >
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰ Filters
      </button>
      <div className={isOpen ? "block" : "hidden md:block"}>
        <FilterSection title={"Job Type"} options={jobTypes} />

        <FilterSection title={"Experience"} options={experience} />

        <FilterSection title={"Locations"} options={locations} />

        <FilterSection title={"Salaries"} options={salaries} />
      </div>
    </section>
  );
}

export default Filters;
