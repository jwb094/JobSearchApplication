import React from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Card from "../components/Card";
function Home(props) {
  const featuredJobCard = [];
  const popularCatgeroiesCards = [];

  for (let index = 0; index <= 2; index++) {
    featuredJobCard.push(<JobCard />);
  }

  for (let i = 0; i <= 5; i++) {
    popularCatgeroiesCards.push(<Card />);
  }

  return (
    <>
      <div className="flex flex-col gap-y-6 | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <h2 className="text-3xl">Find Your Next Job Here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          dignissimos alias ducimus tempore voluptas, quibusdam delectus esse
          adipisci enim, provident ad quo animi odio omnis recusandae? Alias
          corporis aut quod.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Featured Job */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Featured</h2>
      </div>
      <section className="c-featured-jobs | | mx-auto px-4 py-16 sm:px-6 lg:px-12 |  max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-x-6">
          {featuredJobCard}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <h2 className="text-3xl uppercase">Browser popular categories</h2>
      </div>
      {/* Browse Job By Catgeories  */}
      <section className="c-featured-jobs-categories | | mx-auto px-4 py-16 sm:px-6  |  max-w-7xl">
        <div className="flex flex-col md:flex-row flex-wrap gap-x-8">
          {popularCatgeroiesCards}
        </div>
      </section>
    </>
  );
}

export default Home;
