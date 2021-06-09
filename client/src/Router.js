import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import Signup from "./pages/Signup";
import StreamView from "./pages/StreamView";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route path="/stream/:username">
            <StreamView />
          </Route>

          <Route path="/u/:username">
            <ProfilePage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
