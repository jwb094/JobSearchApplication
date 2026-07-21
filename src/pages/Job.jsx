import React, { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import Button from "../components/Button";
import {
  CompanyIcon,
  JobTypeIcon,
  LocationIcon,
  SalaryIcon,
} from "../assets/icons";
import JobCard from "../components/JobCard";
import {
  checkJobDescriptionSlug,
  getJobDescByID,
  getJobsFromSameCategory,
} from "../utils/dataset_functions";

import PageNotFound from "./PageNotFound";
import { Link, useParams } from "react-router";
import { useJobContext } from "../context/Jobs";
import { seoData_job_description } from "../data/Page_seo/seo_data";
import MetaTags from "../components/MetaTags";
function Job(props) {
  const { appliedJobs, isJobApplied, addJobToAppliedCollection } =
    useJobContext();

  const { job_id, job_slug } = useParams();
  const [resultmessage, setResultMessage] = useState();
  const job = getJobDescByID(job_id);
  const jobSlug = checkJobDescriptionSlug(job_slug);
  const relatedJobs = getJobsFromSameCategory(job);
    const hasApplied = isJobApplied(job.id)
  if (jobSlug === -1 || !job) {
    return <PageNotFound />;
  }
  useEffect(() => {
    isJobApplied(Number(job_id))
      ? setResultMessage("Applied")
      : setResultMessage("");
  }, []);

  function appliedForJob(event) {
    if (confirm(`Confirm you're applying for the role of ${job.title}`)) {
      setResultMessage("Applied");
      // isJobAmongstApplied(job.id)
      addJobToAppliedCollection(job.id);
    } else {
      setResultMessage("");
    }
  }

  return (
    <>
          <MetaTags
            title={`${job.title} ${seoData_job_description.title}`}
            description={seoData_job_description.description}
            name={seoData_job_description.twitterName}
          />
      <section className="job-description-content">
        <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 lg:py-12  |  max-w-7xl">
          <h2 className="text-3xl">{job.title}</h2>
          <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <CompanyIcon width={24} height={24} />{" "}
            <Link
              to={`/company/${job.companyDetails.id}/${job.companyDetails.slug}`}
            >
              {job.company_name}
            </Link>
          </p>
          <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <JobTypeIcon width={24} height={24} /> {job.jobType}
          </p>
          <div className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <LocationIcon width={24} height={24} />
            <ul>
              <li>City: {job.job_location}</li>
              <li>Address: {job.companyDetails.address}</li>
              <li>PostCode: {job.companyDetails.postcode}</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <SalaryIcon width={24} height={24} /> {job.salary_min} -{" "}
            {job.salary_max}
          </p>
        </div>

        <div className="flex flex-col gap-y-6 | mx-auto px-4 py-8 sm:px-6 lg:px-12 lg:py-0 |  max-w-7xl">
          <h6 className="font-semibold">Company Overview:</h6>
          <p>{job.companyDetails.company_overview}</p>
        </div>

        <div className="flex flex-col gap-y-6 | mx-auto px-4 py-8 sm:px-6 lg:px-12 lg:py-6 |  max-w-7xl">
          <h6 className="font-semibold">Job Description:</h6>
          <p>{job.description}</p>
        </div>

        <div className="flex flex-col gap-y-6 | mx-auto px-4 py-8 sm:px-6 lg:px-12 |  max-w-7xl">
          <h6 className="font-semibold">Role Responsibilities:</h6>
          <ul className="job-description-responsibilities">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h6 className="font-semibold">Essential Skills:</h6>
          <ul className="job-description-responsibilities">
            {job.essential_skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h6 className="font-semibold">Desirable Skills:</h6>
          <ul className="job-description-responsibilities">
            {job.desirable_skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <SummaryCard
            title={"Additional Information"}
            content={job.additional_info}
          />
          <button
            // disabled={resultmessage === "Applied"}
            disabled={hasApplied}
            onClick={appliedForJob}
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            {hasApplied ? "Applied" : " Apply"}
          </button>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-12">
          <h2 className="text-3xl uppercase">Similar Jobs</h2>
        </div>
        <section
          className="c-similar-jobs | 
       flex flex-col md:flex-row w-full justify-around |
      mx-auto px-4 py-0 sm:px-6 lg:px-12 |  
      max-w-7xl"
        >
          <div className="flex flex-col md:flex-row w-full gap-x-12">
            {/* {relatedJobs} */}
            {relatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Job;
