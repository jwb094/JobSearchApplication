import { jobs } from "../data/jobs";
import { companies } from "../data/companies";
import { categories } from "../data/categories";
let mostRecentFearturedJobs = jobs
  .sort((a, b) => {
    return new Date(b.posted_date) - new Date(a.posted_date);
  })
  .filter((job) => job.featured)
  .slice(0, 3)
  .map((job) => {
    const company = companies.find((company) => company.id === job.company_id);
    job.job_type = job.job_type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    job.salary_min = job.salary_min.toLocaleString("en-Gb");
    job.salary_max = job.salary_max.toLocaleString("en-Gb");
    job.url = `/job/${job.id}/${job.slug}`;
    return { ...job, company_name: company?.company_name ?? "Unknown Company" };
  });

export const recentFearturedJobs = mostRecentFearturedJobs;

export const mostRecentJobs = jobs
  .sort((a, b) => {
    return new Date(a.posted_date) > new Date(b.posted_date) ? -1 : 1;
  })
  .filter((job) => !recentFearturedJobs.some((item) => item.id === job.id))
  .slice(0, 3);

export const getRandomCategories = [...categories]
  .sort(() => Math.random() - 0.5)
  .slice(0, 6)
  .map((cat) => {
    return {
      id: cat.id,
      title: cat.name,
      url: `/job/category/${cat.slug}`,
    };
  });
