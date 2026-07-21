import React, {
  useEffect,
  useState,
  useMemo,
  startTransition,
  useTransition,
} from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import JobCard from "../components/JobCard";
import SortDropdown from "../components/SortDropdown";
import SearchLoading from "../components/SearchLoading";
import { useSearchParams } from "react-router";
import {
  contentPagination,
  //getJobs,
  SearchJobDB,
  getJobDescsRandomise,
  sortJobs,
  filterJobs,
} from "../utils/dataset_functions";

import MetaTags from "../components/MetaTags";

import { useFilterContext } from "../context/Filters";
import { useJobContext } from "../context/Jobs";
import { seoData_search_jobs } from "../data/Page_seo/seo_data";
function SearchPage(props) {
  const { appliedJobs } = useJobContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const paginationData = getJobDescsRandomise;
  const [searchContentData, setSearchContent] = useState([]);
   

  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const limit = 9;
  const { filters, updateFiltersParams, filterSearchParams } = useFilterContext();
  const [searchFiltersParams, setSearchFiltersParams] = useState("");
  const [filters_search_params, setFilterSearchParams] =
    useState(filterSearchParams);

  useEffect(() => {
    //If redirect from home page
    const query = searchParams.get("query") || "";
    setSearchTerm(query);
    if (query) {
      const result = SearchJobDB(query);
      setSearchResult(result);
      setPaginationData(result);
    }
    const url = updateURL(searchTerm, page, sort, filters);
    window.history.pushState({}, "", url);
    //inital load
  }, [searchParams]);

  const handleSearchSumbit = (event) => {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      const result = SearchJobDB(searchTerm);

      startTransition(() => {
        setPaginationData(result);
        setPage(1);
      });
      const url = updateURL(searchTerm, page, sort);
      window.history.pushState({}, "", url);
      setLoading(false);
    }, 3000);
  };

  function updateURL(search, pageNo, sortOrder) {
    let searchURL = "";
    if (search.trim() !== "") {
      searchURL = searchURL.concat("?query=" + search);
    }
    searchURL = searchURL.concat("?pageNumber=" + pageNo);

    if (sortOrder.trim() !== "") {
      searchURL = searchURL.concat("?sort=" + sortOrder);
    }

    return searchURL;
  }
  const sortList = (event) => {
    const value = event.target.value;
    setSort(value);

    const url = updateURL(searchTerm, page, value);
    window.history.pushState({}, "", url);
  };

  const jobsSortedAndFiltered =
      useMemo(() =>{
      return sortJobs(
        filterJobs(paginationData,filters)
        ,sort);
  },[filters,sort])

   const paginationLogic = useMemo(() => contentPagination(page, limit, jobsSortedAndFiltered),
   [jobsSortedAndFiltered,page]);

 const jobsToDisplay = useMemo(() => jobsSortedAndFiltered.slice((page - 1) * limit, page * limit))


  function handlePageChange(value) {
    setPage(value);

    const url = updateURL(searchTerm, value, sort);
    window.history.pushState({}, "", url);
  }
  console.log(appliedJobs);
  return (
    <>
          <MetaTags
        title={seoData_search_jobs.title}
        description={seoData_search_jobs.description}
        name={seoData_search_jobs.twitterName}
      />
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl | text-center">
        <h2 className="text-3xl">Search</h2>
        <p>
          Find your next opportunity with powerful search filters to discover
          jobs matching your skills, experience and career goals.
        </p>
      </div>
      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        search={handleSearchSumbit}
        isLoading={loading}
      />
      <section>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
          {/* Filters  */}
          <div className="flex flex-col md:w-1/4">
            <Filters />
          </div>
          {/* Search Results  */}
          <div className="flex flex-col md:w-3/4">
            <SortDropdown sortList={sortList} />
             {loading || isPending ? (
              <>
                <SearchLoading />
              </>
            ) : jobsToDisplay.length === 0 ? (
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
                  <JobCard key={job.id} job={job} />
                ))} 
              </>
            )} 
            <Pagination
              totalPages={paginationLogic.totalPages}
              page={paginationLogic.currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchPage;
