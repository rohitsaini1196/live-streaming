import axios from "axios";
import authHeader from "./authHeader";
const POST_API_URL = "http://localhost:3333/api/post/";

export default {
  fetchPost(postId) {
    //console.log(username + " calling for stream details");
    const URL = POST_API_URL + "p/" + postId;
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

  fetchAllPosts() {
    const URL = POST_API_URL + "all";
    return axios
      .get(URL, { headers: authHeader() })
      .then((res) => {
        if (res) {
          return res.data.reverse();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  createNewPost(content, username, userId) {
    const URL = POST_API_URL + "create";
    const payload = { content, username, userId };
    return axios
      .post(URL, payload, { headers: authHeader() })
      .then((res) => {
        if (res) {
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deletePost(postId, userId) {
    const URL = POST_API_URL + "d/" + postId + "/" + userId;

    console.log(URL);
    return axios
      .delete(URL, { headers: authHeader() })
      .then((res) => {
        if (res) {
          //  console.log(res);
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
