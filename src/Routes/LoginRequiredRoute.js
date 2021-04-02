import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../Common/UserContext";

// Private Routes - login needed
// Checks for valid current user and redirects to login if not

function LoginRequiredRoute({ exact, path, children }) {

  const { currentUser } = useContext(UserContext);
  
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
      <Route exact={exact} path={path}>{children}</Route>
  );
}

export default LoginRequiredRoute;
