import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { userService } from "../../service/UserService";

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            userService.isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

UserRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default UserRoute;
