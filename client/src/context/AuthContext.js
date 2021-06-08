import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AUTH_API_URL = "http://localhost:3333/api/user/";
const AuthContext = React.createContext();

export default AuthContext;

export function AuthProviderLocal(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.removeItem("stract-user-token");
    setIsAuthenticated(false);
    setUser({});
  };

  const login = (email, password) => {
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
  };

  const register = (payload) => {
    return axios
      .post(AUTH_API_URL + "register", payload)
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("stract-user-token", JSON.stringify(res.data));
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUserDetails = (username) => {
    return axios
      .get(AUTH_API_URL + "u/" + username)
      .then((res) => {
        if (res) {
          //setUser(res.data);
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(async () => {
    const token = await localStorage.getItem("stract-user-token");
    if (token != null) {
      setIsAuthenticated(true);
      var jwtObj = jwtDecode(token);
      var username = jwtObj.username;
      const user = await fetchUserDetails(username);
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
