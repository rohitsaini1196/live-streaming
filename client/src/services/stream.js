import axios from "axios";
import authHeader from "./authHeader";
const STREAM_API_URL = "http://localhost:3333/api/stream/";

export default {
  fetchStream(username) {
    console.log(username + " calling for stream details");
    const URL = STREAM_API_URL + "s/" + username;
    //console.log(URL);
    return axios
      .get(URL, { headers: authHeader() })
      .then((res) => {
        if (res) {
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
