import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Card from "../components/Card";
import { useNavigate } from "react-router";

import {
  recentFearturedJobs,
  mostRecentJobs,
  getRandomCategories,
} from "../utils/dataset_functions";

import { useJobContext } from "../context/Jobs";
function Home(props) {
  const { appliedJobs, } =
    useJobContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearchSumbit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/search" + "?query=" + searchTerm);

      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl | text-center">
        <h2 className="text-3xl">Find Your Next Job Here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          dignissimos alias ducimus tempore voluptas, quibusdam delectus esse
          adipisci enim, provident ad quo animi odio omnis recusandae? Alias
          corporis aut quod.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        search={handleSearchSumbit}
        isLoading={loading}
      />

      {/* Featured Job */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Featured</h2>
      </div>
      <section className="c-featured-jobs | | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-x-6">
          {recentFearturedJobs.map((recentFearturedJob) => (
            <JobCard
              key={recentFearturedJob.id}
              job={recentFearturedJob}
              utilityClasses={""}
            />
          ))}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Browser popular categories</h2>
      </div>
      {/* Browse Job By Catgeories  */}
      <section className="c-featured-jobs-categories | | mx-auto px-4 py-16 sm:px-6  |  max-w-7xl">
        <div className="flex flex-col md:flex-row flex-wrap gap-x-8">
          {getRandomCategories.map((category) => (
            <Card key={category.id} content={category} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
