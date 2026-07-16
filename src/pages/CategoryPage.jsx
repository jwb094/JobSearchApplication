import React from "react";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import Pagaination from "../components/Pagination";
import SortDropdown from "../components/SortDropdown"
function CategoryPage(props) {
  const popular = [];
  const featured = [];
  for (let index = 0; index <= 2; index++) {
    popular.push(<JobCard />);
  }
  for (let index = 0; index <= 2; index++) {
    featured.push(<JobCard />);
  }

    const categoryJobCards = [];
  for (let index = 0; index <= 8; index++) {
    categoryJobCards.push(<JobCard />);
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
      {/* popular */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Popular</h2>
      </div>
      <section className="c-featured-jobs | | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-x-6">
          {popular}
        </div>
      </section>
      {/* featured */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Featured</h2>
      </div>
      <section className="c-featured-jobs | | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-x-6">
          {featured}
        </div>
      </section>

         <section>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
          {/* Filters  */}
          <div className="flex flex-col md:w-1/4">
            <Filters />
          </div>
          {/* Search Results  */}
          <div className="flex flex-col md:w-3/4">
          <SortDropdown />
          {categoryJobCards}
          </div>
        </div>
        <Pagaination />
      </section>
    </>
  );
}

export default CategoryPage;
