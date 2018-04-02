import User from "../entity/User";
import {checkIfObjectsAreEqual} from "../utils/ObjectComparator";

class UserService {
    constructor(users) {
        this.users = users;
    }

    login(data) {
        const user = this.users.find(user => {
            if (checkIfObjectsAreEqual(data, user)) return user;
        });

        if (user) localStorage.setItem("user", JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem("user");
    }

    isAuthenticated() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export const userService = new UserService([
    new User({username: "user", password: "pass", name: "Test User"}),
    new User({username: "user2", password: "pass", name: "Test User 2"})],
    new User({username: "user3", password: "pass", name: "Test User 3"}));