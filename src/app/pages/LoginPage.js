import React from "react";
import {userService} from "../../service/UserService";

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        error: ""
    };

    handleUsernameChange = e => this.setState({ username: e.target.value });

    handlePasswordChange = e => this.setState({ password: e.target.value });

    handleSubmit = e => {
        e.preventDefault();
        const { error, ...data } = this.state;
        userService.login(data);
        if (userService.isAuthenticated()) this.props.history.push("/profile");
        else this.clearForm() ;
    };

    clearForm = () => this.setState({ username: "", password: "", error: "Login failed!" });

    render() {
        const { username, password, error } = this.state;
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    {error && (<p>{error}</p>)}
                    <label htmlFor="username">Username
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={this.handleUsernameChange} />
                    </label>
                    <br />
                    <label htmlFor="password">Password
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={this.handlePasswordChange} />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;