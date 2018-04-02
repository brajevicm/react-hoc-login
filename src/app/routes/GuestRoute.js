import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { userService } from "../../service/UserService";

const GuestRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            userService.isAuthenticated() ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default GuestRoute;
