import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import Signup from "./pages/Signup";
import StreamView from "./pages/StreamView";

import PrivateRoute from "./components/Utility/PrivateRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <PrivateRoute path="/stream/:username">
            <StreamView />
          </PrivateRoute>

          <PrivateRoute path="/u/:username">
            <ProfilePage />
          </PrivateRoute>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
