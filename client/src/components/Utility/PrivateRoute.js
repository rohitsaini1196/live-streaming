import AuthContext from "../../context/AuthContext";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import React, { useContext, useEffect } from "react";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  console.log({ isAuthenticated, user });
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

const FakeFake = () => {
  let history = useHistory();
  useEffect(() => {
    console.log("gg gg gg");
    history.push("/login");
  }, []);
  return <div></div>;
};
