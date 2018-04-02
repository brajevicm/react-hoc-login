import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";

import HomePage from "./app/pages/HomePage";
import ProfilePage from "./app/pages/ProfilePage";
import LoginPage from "./app/pages/LoginPage";
import GuestRoute from "./app/routes/GuestRoute";
import UserRoute from "./app/routes/UserRoute";

class App extends Component {

    render() {
        return (
            <Fragment>
                <Route exact path="/" component={HomePage} />
                <GuestRoute
                    exact
                    path="/login"
                    component={LoginPage}
                />
                <UserRoute
                    exact
                    path="/profile"
                    component={ProfilePage}
                />
            </Fragment>
        );
    }
}

export default App;
