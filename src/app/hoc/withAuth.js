import React, { Component } from "react";
import { userService } from "../../service/UserService";

export default ComposedComponent =>
  class Auth extends Component {
    componentDidMount = () => {
      if (!userService.isAuthenticated()) this.props.history.push("/");
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
