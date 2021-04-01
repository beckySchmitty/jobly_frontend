import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import CompanyList from "../Companies/CompanyList";
import JobList from "../Jobs/JobList";
import CompanyDetail from "../Companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../auth/ProfileForm";
import SignupForm from "../auth/SignupForm";
import UserContext from "./auth/UserContext";


// Site Wide Frontend Routes

const Routes = ({login, signup}) => {

  return (
      <div className="pt-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <Route exact path="/companies">
            <CompanyList />
          </Route>

          <Route exact path="/jobs">
            <JobList />
          </Route>

          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>

          <Route path="/profile">
            <ProfileForm />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;