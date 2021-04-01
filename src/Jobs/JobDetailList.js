import React from "react";
import JobDetail from "./JobDetail";

function JobDetailList({ jobs }) {

  return (
      <div className="JobCardList">
        {jobs.map(j => (
            <JobDetail
                id={j.id}
                key={j.id}
                title={j.title}
                salary={j.salary}
                equity={j.equity}
                companyName={j.companyName}
            />
        ))}
      </div>
  );
}

export default JobDetailList;
