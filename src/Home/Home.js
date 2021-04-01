import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";
import "./Homepage.css";

// Home page of site
// Welcomes back user or shows signup/login forms

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
        <div>
          <h1>JOBLY</h1>
          <p>Any and all jobs - right here.</p>
          {currentUser
              ? <h3>
                Hello there, {currentUser.firstName || currentUser.username}, welcome back!
              </h3>
              : (<p>
                    <Link to="/login">Log in</Link>

                    <Link to="/signup">Sign up</Link>

                  </p>)}
        </div>
  );

}

export default Home;
