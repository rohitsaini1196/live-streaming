import axios from "axios";

const AUTH_API_URL = "http://localhost:3333/api/user/";

export default {
  getCuurentUser(username) {
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
  },

  fetchUser(username) {
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
  },
};
