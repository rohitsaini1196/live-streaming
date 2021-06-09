import React, { useState, useEffect, useContext } from "react";
import postService from "../../services/post";
import AuthContext from "../../context/AuthContext";
import PostItem from "./PostItem";

function ProfilePosts({ username }) {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteFeedPost = async (postId) => {
    const deletedPost = await postService.deletePost(postId, user.userId);
    if (deletedPost) {
      setPosts(posts.filter((post) => post._id !== postId));
    }
  };

  useEffect(async () => {
    const localPosts = await postService.fetchAllPosts();
    //TODO: use username instead of fetching all projects
    if (localPosts) {
      setPosts(localPosts);
    }
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {posts.map((post, i) => (
            <div key={i}>
              <PostItem data={post} cUser={user} deletePost={deleteFeedPost} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfilePosts;
