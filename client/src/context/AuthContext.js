import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AUTH_API_URL = "http://localhost:3333/api/user/";
const AuthContext = React.createContext();

export default AuthContext;

export function AuthProviderLocal(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setuserId] = useState("");

  const logout = () => {
    localStorage.removeItem("stract-user-token");
    setIsAuthenticated(false);
    setUsername("");
    setuserId("");
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

  useEffect(() => {
    async function userLocalUser() {
      const token = await localStorage.getItem("stract-user-token");
      if (token != null) {
        setIsAuthenticated(true);
        var jwtObj = jwtDecode(token);
        console.log(jwtObj);
        setUsername(jwtObj.username);
        setuserId(jwtObj._id);
      }
    }
    userLocalUser();
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        userId,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
