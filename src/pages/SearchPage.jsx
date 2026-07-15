import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Pagaination from "../components/Pagination";
import JobCard from "../components/JobCard";
function SearchPage(props) {
  const searchReultsJobCard = [];
  for (let index = 0; index <= 8; index++) {
    searchReultsJobCard.push(<JobCard />);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <h2 className="text-3xl">Search</h2>
        <p>
          Find your next opportunity with powerful search filters to discover
          jobs matching your skills, experience and career goals.
        </p>
      </div>
      {/* Search Bar */}
      <SearchBar />
      <section>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
          {/* Filters  */}
          <div className="flex flex-col md:w-1/4">
            <Filters />
          </div>
          {/* Search Results  */}
          <div className="flex flex-col md:w-3/4">{searchReultsJobCard}</div>
        </div>
        <Pagaination />
      </section>
    </>
  );
}

export default SearchPage;
