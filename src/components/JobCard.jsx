import React from "react";
import Button from "./Button";
import {
  CompanyIcon,
  JobTypeIcon,
  LocationIcon,
  SalaryIcon,
} from "../assets/icons";
function JobCard(props) {
  return (
    <section
      data-template="JobCard"
      data-view="default"
      className="c-job-card w-full"
    >
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
        <div className="p-4 flex flex-col gap-y-3">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            {props.job.title}
          </h5>
          <p className="text-slate-600 leading-normal font-light flex gap-x-5">
            <CompanyIcon width={24} height={24} /> {props.job.company_name}
          </p>
          <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <JobTypeIcon width={24} height={24} /> {props.job.jobType}
          </p>
          <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <LocationIcon width={24} height={24} />{" "}
            {props.job.job_location}
          </p>
          <p className="text-slate-600 leading-normal font-light flex  gap-x-5">
            <SalaryIcon width={24} height={24} /> {props.job.salary_min} -{" "}
            {props.job.salary_max}
          </p>
          <Button link={props.job.url} title={"View Job"} />
        </div>
      </div>
    </section>
  );
}

export default JobCard;
