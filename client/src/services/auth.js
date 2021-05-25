import axios from "axios";
import authHeader from "./authHeader";
import jwtDecode from "jwt-decode";

const AUTH_API_URL = "http://localhost:3333/api/user/";

export default {
  isAuthenticated() {
    const token = localStorage.getItem("stract-user-token");
    //console.log(token);
    if (token != null) {
      return true;
    } else {
      return false;
    }
  },

  getCuurentUser() {
    var jwtObj = jwtDecode(localStorage.getItem("stract-user-token"));
    return jwtObj.username;
  },

  logout() {
    localStorage.removeItem("stract-user-token");
  },

  login(email, password) {
    return axios
      .post(AUTH_API_URL + "login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("stract-user-token", JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
