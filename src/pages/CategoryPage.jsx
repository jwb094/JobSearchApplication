import React, { useEffect, useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import Filters from "../components/Filters";
import Pagaination from "../components/Pagination";
import SortDropdown from "../components/SortDropdown";
import {
  contentPagination,
  filterJobs,
  getCategoryBySlug,
  getFeaturedCategoryJobs,
  //getJobs,
  getJobsByCatgeory,
  sortJobs,
  //,categoryFeaturedJob
} from "../utils/dataset_functions";
import { useParams } from "react-router";
import { useFilterContext } from "../context/Filters";
import Pagination from "../components/Pagination";
function CategoryPage(props) {
  const { category_slug } = useParams();
  const { filters } = useFilterContext();
  const paginationData = getJobsByCatgeory(category_slug);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const limit = 9;

  const category = getCategoryBySlug(category_slug);
  const featuredJobs = getFeaturedCategoryJobs(category.id);

  if (!paginationData) {
    return <PageNotFound />;
  }

  const jobsSortedAndFiltered = useMemo(() => {
    return sortJobs(filterJobs(paginationData, filters), sort);
  }, [filters, sort]);

  const paginationLogic = useMemo(
    () => contentPagination(page, limit, jobsSortedAndFiltered),
    [jobsSortedAndFiltered, page],
  );

  const jobsToDisplay = useMemo(() =>
    jobsSortedAndFiltered.slice((page - 1) * limit, page * limit),
  );


  const sortList = (event) => {
    const value = event.target.value;
    setSort(value);
    const url = updateURL(page, value);
    window.history.pushState({}, "", url);
  };

  function handlePageChange(value) {
    setPage(value);
    const url = updateURL(value, sort);
    window.history.pushState({}, "", url);
  }

  function updateURL(pageNo, sortOrder) {
    let searchURL = "";

    searchURL = searchURL.concat("?pageNumber=" + pageNo);

    if (sortOrder.trim() !== "") {
      searchURL = searchURL.concat("?sort=" + sortOrder);
    }

    return searchURL;
  }
  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12  |  max-w-7xl | text-center">
        <h2 className="text-3xl">{category.name}</h2>
        <p>{category.description}</p>
      </div>
      {/* featured */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Featured</h2>
      </div>
      <section className="c-featured-jobs | | mx-auto px-4 py-16 sm:px-6 lg:px-12 lg:py-0 |  max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-x-6 ">
          {/* {popular} */}
          {featuredJobs.map((job) => (
            <JobCard job={job} utilityClasses={"h-72 justify-around"} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
          <div className="flex flex-col md:w-1/4">
            <Filters />
          </div>

          <div className="flex flex-col md:w-3/4">
            <SortDropdown sortList={sortList} />
            {jobsToDisplay.length === 0 ? (
              <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4 text-center">
                <h2>No Jobs matched your search criteria</h2>

                <p> Try:</p>
                <ul>
                  <li>another keyword</li>
                  <li>Apply different filters</li>
                </ul>
              </div>
            ) : (
              <>
                {jobsToDisplay.map((job) => (
                  <JobCard key={job.id} job={job} utilityClasses={""} />
                ))}
              </>
            )}
          </div>
        </div>
        <Pagination
          totalPages={paginationLogic.totalPages}
          page={paginationLogic.currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}

export default CategoryPage;
