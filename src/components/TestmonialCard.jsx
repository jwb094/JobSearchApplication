import React from "react";
import { StarIcon } from "../assets/icons";
function TestmonialCard({review}) {
  console.log(review);
      const rating = [];
    {
        for (let index = 0; index < review.rating; index++) {

            rating.push(<StarIcon width={24} height={24} />)

        }
    }
  return (

    <section
      data-template="testmonial-card"
      data-view="default"
      className="c-testmonial-card"
    >
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full md:h-72">
        <div className="h-full p-4 flex flex-col justify-between">
          <p className="mb-2 text-slate-800 text-md font-semibold">
            {review.description}
          </p>
          <small className="flex flex-row gap-x-2">{rating}</small>
          <h5 className="text-slate-600 leading-normal font-light text-xl">
          {review.name}
          </h5>
          <p className="text-slate-600 leading-normal font-light text-lg">
             {review.role}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestmonialCard;
