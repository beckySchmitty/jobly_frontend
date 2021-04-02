import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyDetail from "./CompanyDetail";


// Shows page with list of companies
// routed to /companies

function CompanyList() {

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

//  Calls API (ADD SEARCH FORM)
  async function search() {
    let companies = await JoblyApi.getAllCompanies();
    setCompanies(companies);
  }

  if (!companies) return "LOADING..."

  return (
      <div>
          {/* Add Search Form Here */}
        {companies.length ? (
                <div>
                  {companies.map(c => (
                      <CompanyDetail
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p>Sorry folks, no results here!</p>
            )}
      </div>
  );
}

export default CompanyList;
