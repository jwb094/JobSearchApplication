import React, { useMemo, useState } from "react";
import { useParams } from "react-router";
import {
  checkCompanyExists,
  contentPagination,
  filterJobs,
  getCompanyDetailsAndJobs,
  sortJobs,
} from "../utils/dataset_functions";
import PageNotFound from "./PageNotFound";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  WebsiteIcon,
} from "../assets/icons";
import Filters from "../components/Filters";
import { useFilterContext } from "../context/Filters";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";
import JobCard from "../components/JobCard";
function Company(props) {
  const { company_id, company_slug } = useParams();
  const { filters, updateFiltersParams, filterSearchParams } =
    useFilterContext();
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const limit = 9;
  let companyDetails, companyJobs;
  const doesCompanyExist = checkCompanyExists(company_id);

  if (doesCompanyExist === -1) {
    return <PageNotFound />;
  }
  const company = getCompanyDetailsAndJobs(company_id);
  companyDetails = company.company;
  companyJobs = company.companyJobs;
  const paginationData = company.companyJobs;

  const sortList = (event) => {
    const value = event.target.value;
    setSort(value);

    const url = updateURL(page, value);
    window.history.pushState({}, "", url);
  };

  function updateURL(pageNo, sortOrder) {
    let searchURL = "";
    searchURL = searchURL.concat("?pageNumber=" + pageNo);

    if (sortOrder.trim() !== "") {
      searchURL = searchURL.concat("?sort=" + sortOrder);
    }

    return searchURL;
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

  function handlePageChange(value) {
    setPage(value);

    const url = updateURL(value, sort);
    window.history.pushState({}, "", url);
  }

  console.log(filters);
  return (
    <>
      <section className="Company-Details">
        <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12  |  max-w-7xl | text-center md:text-start">
          <h1 className="text-3xl">{companyDetails.company_name}</h1>
          {/* </div>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-8 sm:px-6 lg:px-12 lg:py-12  |  max-w-7xl"> */}
          <h3 className="text-lg font-bold">Description</h3>
          <p>{companyDetails.company_overview}</p>

          <h3 className="text-lg font-bold">Socials</h3>
          <ul className="flex  flex-row justify-between px-6 md:gap-x-8">
            <li>
              {" "}
              <a href={companyDetails.website}>
                <WebsiteIcon width={24} height={24} />
              </a>
            </li>
            <li>
              {" "}
              <a href={companyDetails.social_links.linkedin}>
                <LinkedinIcon width={24} height={24} />
              </a>
            </li>
            <li>
              {" "}
              <a href={`tel:{companyDetails.social_links.whatsapp}`}>
                <WhatsAppIcon width={24} height={24} />
              </a>
            </li>
            <li>
              {" "}
              <a href={companyDetails.social_links.twitter}>
                <TwitterIcon width={24} height={24} />
              </a>
            </li>
            <li>
              {" "}
              <a href={companyDetails.social_links.facebook}>
                <FacebookIcon width={24} height={24} />
              </a>
            </li>
            <li>
              {" "}
              <a href={companyDetails.social_links.instagram}>
                <InstagramIcon width={24} height={24} />
              </a>
            </li>
          </ul>
          {/* <p>Website:&nbsp;<a href={companyDetails.website}>{companyDetails.company_name}</a>
        </p> */}
          {/* </div>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-8 sm:px-6 lg:px-12 lg:py-12  |  max-w-7xl"> */}
          <h3 className="text-lg font-bold">Key Information</h3>
          <ul className="flex flex-col justify-baseline gap-y-6 md:flex-row md:gap-x-6">
            <li>Employee Count:&nbsp;{companyDetails.employee_count}</li>
            <li>Company Size:&nbsp;{companyDetails.company_size}</li>
            <li>Founded:&nbsp;{companyDetails.founded_year}</li>
            <li>Rating:&nbsp;{companyDetails.rating}</li>
          </ul>
          <h3 className="text-lg">Company Values</h3>
          <ul className="flex flex-col justify-baseline gap-y-6 md:gap-x-6">
            {companyDetails.company_values.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="company-Jobs flex flex-col  md:flex-row gap-y-6 md:gap-x-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12  |  max-w-7xl">
        <div className="flex flex-col md:w-1/4">
          <Filters />
        </div>
        <div className="flex flex-col md:w-3/4">
        <div className="flex flex-row justify-between items-center">

         {jobsToDisplay.length > 0 && <p>Open Jobs: {jobsToDisplay.length}</p>}
          <SortDropdown sortList={sortList} />
        </div>

          {jobsToDisplay.length === 0 ? (
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-4 text-center">
              <h2>
                Currently {companyDetails.company_name} Doesn't have any Open
                Vacanies advertise under these search criteria
              </h2>
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
      </section>
    </>
  );
}

export default Company;
