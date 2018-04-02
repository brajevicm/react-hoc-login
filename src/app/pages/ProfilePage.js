import React, { Component } from "react";
import {userService} from "../../service/UserService";

class ProfilePage extends Component {
    state = {
      user: {}
    };

    componentDidMount() {
        const user = userService.isAuthenticated();
        this.setState({ user })
    }

    handleLogout = () => {
        userService.logout();
        this.props.history.push("/");
    };

    render() {
        const { user } = this.state;
        return (
            <div>
                <h1>Profile Page</h1>
                <p>Welcome: {user.name}</p>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}


export default ProfilePage;