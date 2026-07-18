import React, { useState } from "react";
import FilterSection from "./Filters/FilterSection";
import { jobTypes, experience, locations, salaries } from "../data/filter";
import { HambugerIcon,ClosedIcon } from "../assets/icons";
import { getJoblocations } from "../utils/dataset_functions";
function Filters(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      data-template="filters"
      data-view="default"
      className="c-filters | px-4 py-6  bg-teal-400"
    >
      <button className="flex flex-row gap-6 md:hidden" onClick={() => setIsOpen(!isOpen)}>
      
        {!isOpen ? <HambugerIcon width={24} height={24}/> : <ClosedIcon width={24} height={24}/>}
        Filters
      </button>
      <div className={isOpen ? "block" : "hidden md:block"}>
        <FilterSection filterCategory={"jobType"} title={"Job Type"} options={jobTypes} />

        <FilterSection filterCategory={"experience"} title={"Experience"} options={experience} />

        <FilterSection filterCategory={"location"} title={"Locations"} options={getJoblocations} classStyle={"overflow-auto h-96"}/>

        <FilterSection filterCategory={"salaries"} title={"Salaries"} options={salaries} />

        <button
          class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}

export default Filters;
