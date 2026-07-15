import React from "react";
import SummaryCard from "../components/SummaryCard";
import ApplyCard from "../components/ApplyButton";
import {
  CompanyIcon,
  JobTypeIcon,
  LocationIcon,
  SalaryIcon,
} from "../assets/icons";
import JobCard from "../components/JobCard";
function Job(props) {
  const relatedJobs = [];
  for (let index = 0; index <= 2; index++) {
    relatedJobs.push(<JobCard key={index} width={"33%"} page={"job_page"} />);
  }
  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <h2 className="text-3xl">Job Title</h2>
        <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
          <CompanyIcon width={24} height={24} /> Company Name
        </p>
        <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
          <JobTypeIcon width={24} height={24} /> Job Type
        </p>
        <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
          <LocationIcon width={24} height={24} /> Location
        </p>
        <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
          <SalaryIcon width={24} height={24} /> min Salary - max Salary
        </p>
      </div>

      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          molestiae facere odio voluptate ipsa nulla omnis ea, a, non at maxime
          libero asperiores illo nemo officia quisquam aliquam. Praesentium,
          ratione.
        </p>
      </div>

      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <SummaryCard title={"Responsibilities"} />
        <SummaryCard title={"Essential Skills"} />
        <SummaryCard title={"Desirable Skills"} />
        <SummaryCard title={"Benefits"} />
        <SummaryCard title={"Additional Information"} />

        <ApplyCard />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Similar Jobs</h2>
      </div>
      <section
        className="c-similar-jobs | 
       flex flex-col md:flex-row w-full justify-around |
      mx-auto px-4 py-16 sm:px-6 lg:px-12 |  
      max-w-7xl"
      >
        {/* <div className="flex flex-col md:flex-row w-full gap-x-12"> */}
        {relatedJobs}
        {/* </div> */}
      </section>
    </>
  );
}

export default Job;
