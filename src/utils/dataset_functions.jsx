import { jobs } from "../data/jobs";
import { companies } from "../data/companies";
import { categories } from "../data/categories";
import { locations } from "../data/locations";
let mostRecentFearturedJobs = jobs
  .sort((a, b) => {
    return new Date(b.posted_date) - new Date(a.posted_date);
  })
  .filter((job) => job.featured)
  .slice(0, 3)
  .map((job) => {
    let more_info = getDetails(job);
    return {
      id: job.id,
      company_name: more_info.company_name,
      jobType: more_info.jobType,
      job_type: more_info.job_type,
      salary_min: more_info.salary_min,
      salary_max: more_info.salary_max,
      url: `/job/${job.id}/${job.slug}`,
      title: job.title,
      job_location: job.location ? job.location : more_info.job_location,
      date_posted: job.posted_date,
    };
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

export const getFeaturedCategoryJobs = (categoryId) => {
  const jobCategoryResults = jobs
    .filter((job) => job.category_id === categoryId)
    .filter((job) => job.featured)
    .map((job) => {
      let more_info = getDetails(job);
      return {
        id: job.id,
        company_name: more_info.company_name,
        jobType: more_info.jobType,
        job_type: job.job_type,
        salary_min: more_info.salary_min,
        salary_max: more_info.salary_max,
        url: `/job/${job.id}/${job.slug}`,
        featured: job.featured,
        category_id: job.category_id,
        title: job.title,
        job_location: job.location ? job.location : more_info.job_location,
        date_posted: job.posted_date,
        experience: more_info.experience,
      };
    })
    .slice(0, 3);

  return jobCategoryResults;
};

export const getJobsByCatgeory = (category) => {
  let selectedCat = categories.find((cat) => cat.slug === category);

  let featuredCategoryJobIDs = getFeaturedCategoryJobs(selectedCat.id);

  const jobCategoryResults = jobs
    .filter((job) => job.category_id === selectedCat.id)
    .filter(
      (job) =>
        !featuredCategoryJobIDs.some((featured) => featured.id === job.id),
    )
    .map((job) => {
      let more_info = getDetails(job);
      return {
        id: job.id,
        company_name: more_info.company_name,
        jobType: more_info.jobType,
        job_type: job.job_type,
        salary_min: more_info.salary_min,
        salary_max: more_info.salary_max,
        url: `/job/${job.id}/${job.slug}`,
        title: job.title,
        job_location: job.location ? job.location : more_info.job_location,
        date_posted: job.posted_date,
        experience: more_info.experience,
      };
    });

  return jobCategoryResults;
};

export const getCategoryBySlug = (categorySlug) => {
  return categories.find((cat) => cat.slug === categorySlug);
};

export const SearchJobDB = (search_term, filters) => {
  if (!search_term.trim()) return jobs;

  const term = search_term.trim().toLowerCase();

  const results = jobs
    .filter((job) => job.title.toLowerCase().split(/\s+/).includes(term))
    .map((job) => {
      let more_info = getDetails(job);
      let jobLocation = job.location ? job.location : more_info.job_location;
      return {
        id: job.id,
        company_name: more_info.company_name,
        jobType: more_info.jobType,
        job_type: job.job_type,
        salary_min: more_info.salary_min,
        salary_max: more_info.salary_max,
        url: `/job/${job.id}/${job.slug}`,
        title: job.title,
        job_location: job.location ? job.location : more_info.job_location,
        date_posted: job.posted_date,
        experience: more_info.experience,
      };
    });
  return results;
};

function getDetails(job) {
  //get Company to retrive company name
  let company = companies.find((company) => company.id === job.company_id);

  let location = locations.find((location) => location.id === job.location_id);

  return {
    jobType: job.job_type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    experience: job.experience,
    job_type: job.job_type,
    salary_min: job.salary_min.toLocaleString("en-Gb"),
    salary_max: job.salary_max.toLocaleString("en-Gb"),
    url: `/job/${job.id}/${job.slug}`,
    company_name: company?.company_name ?? "Unknown Company",
    job_location: location.city,
    date_posted: job.posted_date,
  };
}

// export const getJobs = function (page, limit, data, sort, filters) {
//   let sortedData = [...data];
//   console.log(filters);
//   sortedData = sortedData.filter((job) => {
//     const matchesJobType =
//       filters.jobType.length === 0 || filters.jobType.includes(job.job_type);

//     const matchesSalaries =
//       filters.salaries.length === 0 ||
//       filters.salaries.some(
//         (salary) => Number(job.salary_min.replace(",", "")) >= salary,
//       );

//     const matchesLocationType =
//       filters.location.length === 0 ||
//       filters.location.includes(job.job_location);

//     const matchesExperienceType =
//       filters.experience.length === 0 ||
//       filters.experience.includes(job.experience);

//     return (
//       matchesJobType &&
//       matchesLocationType &&
//       matchesExperienceType &&
//       matchesSalaries
//     );
//   });
//    console.log(sortedData);
//   // let totalAmount = sortedData.length;
//   switch (sort) {
//     case "oldest":
//       sortedData.sort((a, b) =>
//         new Date(b.posted_date) - new Date(a.posted_date) ? 1 : -1,
//       );
//       break;

//     case "newest":
//       sortedData.sort(
//         (a, b) => new Date(a.posted_date) - new Date(b.posted_date),
//       );
//       break;

//     case "az":
//       sortedData.sort((a, b) => a.title.localeCompare(b.title));
//       break;

//     case "za":
//       sortedData.sort((a, b) => b.title.localeCompare(a.title));
//       break;
//     default:
//       break;
//   }

//  return sortedData.slice((page - 1) * limit, page * limit);
//   // return {
//   //   "total":totalAmount,
//   //   "jobToDisplay":sortedData.slice((page - 1) * limit, page * limit)};
//  /**
//    *
//    * Page 1 = 0-9
//    * Page 2 = 9-18
//    * Page 3 = 18-27
//    */
// };

export const filterJobs = function (data, filters) {
  let sortedData = [...data];
  return sortedData.filter((job) => {
    const matchesJobType =
      filters.jobType.length === 0 || filters.jobType.includes(job.job_type);

    const matchesSalaries =
      filters.salaries.length === 0 ||
      filters.salaries.some(
        (salary) => Number(job.salary_min.replace(",", "")) >= salary,
      );

    const matchesLocationType =
      filters.location.length === 0 ||
      filters.location.includes(job.job_location);

    const matchesExperienceType =
      filters.experience.length === 0 ||
      filters.experience.includes(job.experience);

    return (
      matchesJobType &&
      matchesLocationType &&
      matchesExperienceType &&
      matchesSalaries
    );
  });

  //return sortedData;
};

export const sortJobs = function (data, sort) {
  let sortedData = [...data];

  switch (sort) {
    case "oldest":
      sortedData.sort((a, b) =>
        new Date(b.posted_date) - new Date(a.posted_date) ? 1 : -1,
      );
      break;

    case "newest":
      sortedData.sort(
        (a, b) => new Date(a.posted_date) - new Date(b.posted_date),
      );
      break;

    case "az":
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "za":
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return sortedData;
};

export const contentPagination = (page, limit, contentData) => {
  let totalPages = Math.ceil(contentData.length / limit) || 1;
  let currentPage = Math.min(page, totalPages);

  return { totalPages: totalPages, currentPage: currentPage };
};

export const getJoblocations = locations
  .map((item) => {
    return { id: item.city, label: item.city };
  })
  .filter(
    (post, index, array) =>
      index === array.findIndex((item) => item.id === post.id),
  );

export const getJobDescsRandomise = [...jobs]
  .sort(() => Math.random() - 0.5)
  .map((job) => {
    let more_info = getDetails(job);
    return {
      jobType: job.job_type
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      company_name: more_info.company_name,
      job_type: more_info.job_type,
      salary_min: more_info.salary_min,
      salary_max: more_info.salary_max,
      url: `/job/${job.id}/${job.slug}`,
      title: job.title,
      job_location: job.location ? job.location : more_info.job_location,
      date_posted: job.posted_date,
      experience: job.experience,
    };
  });

let getJobsInRandomOrder = [...jobs].sort(() => Math.random() - 0.5);


export const checkJobDescriptionSlug = (job_slug) =>{
 return jobs.findIndex((job) => job.slug === job_slug);
}

export const checkCompanyExists = (company_id) =>{
 return companies.findIndex((company) => company.id === Number(company_id));

}

export const getCompanyDetailsAndJobs =(company_id)=>{
  const company = companies.find((company) => company.id === Number(company_id));

  const companyJobs = getCompanyJobs(company_id);

  return {
    company,
    companyJobs
  }
}

export const getCompanyDetails =(company_id)=>{
return companies.find((company) => company.id === Number(company_id));

}

export const getCompanyJobs = (company_id)=>{

  return jobs.filter((job) => job.company_id === Number(company_id))
  .map((job)=>{
    let more_info = getDetails(job);
      return {
        id: job.id,
        company_name: more_info.company_name,
        jobType: more_info.jobType,
        job_type: job.job_type,
        salary_min: more_info.salary_min,
        salary_max: more_info.salary_max,
        url: `/job/${job.id}/${job.slug}`,
        title: job.title,
        job_location: job.location ? job.location : more_info.job_location,
        date_posted: job.posted_date,
        experience: more_info.experience,
      };
  })
}

export const getJobDescByID = (job_id) => {
  
  const job  = jobs.find((job) => job.id === Number(job_id))

  const companyDetails = getCompanyDetails(job.company_id);
  //companies.find((company) => company.id === Number(job.company_id))
      let more_info = getDetails(job);
      
      return {...job,
        company_name: more_info.company_name,
        companyDetails:companyDetails,
        jobType: more_info.jobType,
        job_type: job.job_type,
        salary_min: more_info.salary_min,
        salary_max: more_info.salary_max,
        url: `/job/${job.id}/${job.slug}`,
        title: job.title,
        job_location: job.location ? job.location : more_info.job_location,
        date_posted: job.posted_date,
        experience: more_info.experience,
      };

};

export const getJobsFromSameCategory = (job) => {
  return jobs
    .filter((job) => job.category_id === job.category_id)
    .map((job) => {
      let more_info = getDetails(job);
      return {
        id: job.id,
        company_name: more_info.company_name,
        jobType: more_info.jobType,
        job_type: job.job_type,
        salary_min: more_info.salary_min,
        salary_max: more_info.salary_max,
        url: `/job/${job.id}/${job.slug}`,
        title: job.title,
        job_location: job.location ? job.location : more_info.job_location,
        date_posted: job.posted_date,
        experience: more_info.experience,
      };
    })
    .slice(0, 3);
};
