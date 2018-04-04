import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import HomePage from "./app/pages/HomePage";
import ProfilePage from "./app/pages/ProfilePage";
import LoginPage from "./app/pages/LoginPage";
import withAuth from "./app/hoc/withAuth";
import withoutAuth from "./app/hoc/withoutAuth";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={withoutAuth(LoginPage)} />
        <Route exact path="/profile" component={withAuth(ProfilePage)} />
      </Fragment>
    );
  }
}

export default App;
