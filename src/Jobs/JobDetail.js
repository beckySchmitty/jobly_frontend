import React, { useContext, useState } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

// Details of one specific job shown in a card
// rendered by JobDetailList


function JobDetail({ id, title, salary, equity, companyName }) {

  return (
      <div> {applied}
        <div>
          <h4>{title}</h4>
          <p>{companyName}</p>
          {salary && <div><small>Salary: {salary}</small></div>}
          {equity !== undefined && <div><small>Equity: {equity}</small></div>}
        </div>
      </div>
  );
}


export default JobDetail;
