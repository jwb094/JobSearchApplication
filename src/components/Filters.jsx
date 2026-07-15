import React from "react";

function Filters(props) {
  return (
    <section
      data-template="filters"
      data-view="default"
      className="c-filters | px-4 py-6 md:max-w-1/4 "
    >
      <h3>Filters</h3>
      <div className="flex flex-col">
        <div className="c-filters-job-type">
          <h6>Job Type</h6>
          <div className="relative flex flex-col rounded-xl bg-white shadow">
            <nav className="flex min-w-[240px] flex-col gap-1 p-2">
              <div
                role="button" className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <label
                  for="job-type-fulltime"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative"
                      for="job-type-fulltime"
                    >
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="job-type-fulltime"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-2 text-slate-600 text-sm"
                      for="job-type-fulltime"
                    >
                      Full-Time
                    </label>
                  </div>
                </label>
              </div>
              <div
                role="button"
                className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <label
                  for="job-type-parttime"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative"
                      for="job-type-parttime"
                    >
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="job-type-parttime"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-2 text-slate-600 text-sm"
                      for="job-type-parttime"
                    >
                      Part-time
                    </label>
                  </div>
                </label>
              </div>
              <div
                role="button"
                className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <label
                  for="job-type-contract"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative"
                      for="job-type-contract"
                    >
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="job-type-contract"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-2 text-slate-600 text-sm"
                      for="job-type-contract"
                    >
                      Contract
                    </label>
                  </div>
                </label>
              </div>
              <div
                role="button"
                className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <label
                  for="job-type-remote"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative"
                      for="job-type-remote"
                    >
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="job-type-remote"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-2 text-slate-600 text-sm"
                      for="job-type-remote"
                    >
                      Remote
                    </label>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </div>

 
      </div>
    </section>
  );
}

export default Filters;
