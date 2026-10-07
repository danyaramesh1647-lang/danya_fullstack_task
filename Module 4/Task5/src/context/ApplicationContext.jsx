import { createContext, useContext, useState } from "react";

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyForJob = (job) => {
    setAppliedJobs((currentJobs) => {
      if (currentJobs.some((item) => item.id === job.id)) {
        return currentJobs;
      }

      return [
        ...currentJobs,
        {
          id: job.id,
          company: job.company,
          role: job.role,
          date: new Date().toLocaleDateString("en-GB"),
          status: "Under Review",
        },
      ];
    });
  };

  const totalApplicationsCount = appliedJobs.length;

  const underReviewCount = appliedJobs.filter(
    (application) => application.status === "Under Review"
  ).length;

  return (
    <ApplicationContext.Provider
      value={{
        appliedJobs,
        applyForJob,
        totalApplicationsCount,
        underReviewCount,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  return useContext(ApplicationContext);
}