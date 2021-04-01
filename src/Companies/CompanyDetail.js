import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import JoblyApi from "../api";

// Lists details about specific Company
// Routed at /companies/:handle

function CompanyDetail() {
  const {handle} = useParams();
  const [company, setCompany] = useState(null);


  useEffect(function getCompanyPerUserRequest() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle))
    }
    getCompany();
  }, [handle]);

  if (!company) return "LOADING..."

  return (
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        {/* Add JOBS linked here */}
      </div>
  );
}

export default CompanyDetail;
