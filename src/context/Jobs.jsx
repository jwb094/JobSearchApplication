import { createContext, useContext, useEffect, useState } from "react";

export const JobsAppliedContext = createContext();

export function JobsProvider({ children }) {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    console.log("JobsProvider mounted");

    return () => {
      console.log("JobsProvider unmounted");
    };
  }, []);



  function isJobApplied(id) {
  return appliedJobs.includes(id);
}

function addJobToAppliedCollection(id) {
  setAppliedJobs(prev =>
    prev.includes(id) ? prev : [...prev, id]
  );
}
  return (
    <JobsAppliedContext.Provider
      value={{
        appliedJobs,
        setAppliedJobs,
        addJobToAppliedCollection,
        isJobApplied
      }}
    >
      {children}
    </JobsAppliedContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobsAppliedContext);

  if (!context) {
    throw new Error("useJobContext must be used within a JobProvide");
  }

  return context;
}
