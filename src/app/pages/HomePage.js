import React from "react";
import { Link } from "react-router-dom";
import {userService} from "../../service/UserService";

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
        <br />
        {userService.isAuthenticated() && <Link to="/profile">Profile</Link>}
    </div>
);

export default HomePage;