import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobDetailList from "./JobDetailList";

import SearchForm from "../Common/SearchForm"

// Lists all Jobs
// routed to at /jobs
// Loads jobs from APIs on mount
// JobList -> JobCardList -> JobCard

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOnMount() {
    search();
  }, []);

// reloads jobs after search submit
  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return "LOADING...";

  return (
      <div>
        <SearchForm searchFor={search} />
        {jobs.length
            ? <JobDetailList jobs={jobs} />
            : <p>Sorry, no results here!</p>
        }
      </div>
  );
}

export default JobList;
