import React from "react";

function Card(props) {
  return (
    <a
      href="#"
      className="text-slate-800 font-semibold text-sm hover:underline flex items-center"
    >
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg  p-6 w-full md:w-96">
        <div className="flex items-center mb-4">
          <h5 className=" text-slate-800 text-xl font-semibold">
            Website Review Check
          </h5>
        </div>
        <span className="flex flex-row">
        view jobs

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        </span>
      </div>
    </a>
  );
}

export default Card;
