export const seoData = {
  site_name: "JobFinder",

  default: {
    title: "JobFinder - Find Your Next Job Opportunity",
    description:
      "JobFinder helps job seekers discover the latest job opportunities across multiple industries. Search jobs, explore companies, and apply for your next career opportunity.",
    twitterName: "@JobFinderUK",
    og_image: "/images/og-image.jpg"
  },


  pages: {

    home: {
      page_name: "Home Page",
      slug: "/",

      title:
        "JobFinder - Find Jobs, Build Your Career and Discover Opportunities",

      description:
        "Search thousands of job opportunities with JobFinder. Discover full-time, part-time, remote, and contract jobs from trusted employers across the UK.",

      keywords: [
        "jobs",
        "job search",
        "UK jobs",
        "career opportunities",
        "employment",
        "vacancies",
        "job vacancies"
      ],

      twitterName: "@JobFinderUK",

      og_image: "/images/og-home.jpg",

      canonical: "https://www.jobfinder.co.uk/",

      robots: "index, follow"
    },


    search_jobs: {
      page_name: "Search Jobs Page",
      slug: "/jobs/search",

      title:
        "Search Jobs - Find Available Job Vacancies | JobFinder",

      description:
        "Search and filter thousands of job vacancies by keyword, location, salary, experience level, and employment type with JobFinder.",

      keywords: [
        "search jobs",
        "job vacancies",
        "find jobs",
        "employment search",
        "career opportunities",
        "UK job search"
      ],

      twitterName: "@JobFinderUK",

      og_image: "/images/og-search-jobs.jpg",

      canonical: "https://www.jobfinder.co.uk/jobs/search",

      robots: "index, follow"
    },


    job_description: {
      page_name: "Job Description Page",
      slug: "/jobs/:slug",

      title:
        "{job_title} - Apply Now | JobFinder",

      description:
        "View the full job description, responsibilities, required skills, salary details, and application information for this role.",

      keywords: [
        "job description",
        "apply for jobs",
        "career opportunity",
        "job requirements",
        "salary information"
      ],

      twitterName: "@JobFinderUK",

      og_image: "/images/og-job.jpg",

      canonical:
        "https://www.jobfinder.co.uk/jobs/{slug}",

      robots: "index, follow"
    },


    about_us: {
      page_name: "About Us Page",
      slug: "/about",

      title:
        "About JobFinder - Connecting People With Career Opportunities",

      description:
        "Learn more about JobFinder and our mission to connect job seekers with trusted employers and meaningful career opportunities.",

      keywords: [
        "about JobFinder",
        "employment platform",
        "career website",
        "job marketplace",
        "recruitment platform"
      ],

      twitterName: "@JobFinderUK",

      og_image: "/images/og-about.jpg",

      canonical:
        "https://www.jobfinder.co.uk/about",

      robots: "index, follow"
    },


    contact_us: {
      page_name: "Contact Us Page",
      slug: "/contact",

      title:
        "Contact JobFinder - Get Help With Your Job Search",

      description:
        "Contact the JobFinder team for support, enquiries, employer assistance, or questions about our recruitment platform.",

      keywords: [
        "contact JobFinder",
        "job support",
        "recruitment support",
        "customer service"
      ],

      twitterName: "@JobFinderUK",

      og_image: "/images/og-contact.jpg",

      canonical:
        "https://www.jobfinder.co.uk/contact",

      robots: "index, follow"
    },


    company: {
      page_name: "Company Page",
      slug: "/companies/:slug",

      title:
        "{company_name} Jobs and Careers | JobFinder",

      description:
        "Explore {company_name} company profile, available jobs, workplace information, and career opportunities on JobFinder.",

      keywords: [
        "company jobs",
        "employer profile",
        "company careers",
        "available positions",
        "employer reviews"
      ],

      twitterName: "@JobFinderUK",

      og_image:
        "/images/og-company.jpg",

      canonical:
        "https://www.jobfinder.co.uk/companies/{slug}",

      robots: "index, follow"
    },


    jobs_by_category: {
      page_name: "Jobs By Category / Industry Page",
      slug: "/jobs/category/:category",

      title:
        "{category_name} Jobs - Find Latest {category_name} Vacancies | JobFinder",

      description:
        "Browse the latest {category_name} jobs and career opportunities. Find vacancies from trusted employers and apply today with JobFinder.",

      keywords: [
        "industry jobs",
        "category jobs",
        "career opportunities",
        "employment vacancies",
        "professional jobs"
      ],

      twitterName: "@JobFinderUK",

      og_image:
        "/images/og-category.jpg",

      canonical:
        "https://www.jobfinder.co.uk/jobs/category/{category}",

      robots: "index, follow"
    },


    not_found: {
      page_name: "404 Page",
      slug: "/404",

      title:
        "Page Not Found | JobFinder",

      description:
        "Sorry, the page you are looking for cannot be found. Return to JobFinder and continue searching for your next career opportunity.",

      keywords: [
        "JobFinder",
        "jobs",
        "career opportunities"
      ],

      twitterName: "@JobFinderUK",

      og_image:
        "/images/og-404.jpg",

      canonical:
        "https://www.jobfinder.co.uk/404",

      robots:
        "noindex, nofollow"
    }
  }
};