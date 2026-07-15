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
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            {review.description}
          </h5>
          <small className="flex flex-row">{rating}</small>
          <p className="text-slate-600 leading-normal font-light">
          {review.name}
          </p>
          <p className="text-slate-600 leading-normal font-light">
             {review.role}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestmonialCard;
