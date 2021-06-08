import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import postService from "../services/post";
function Feed({ posts, cUser, deletePost }) {
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(async () => {
  //   const posts = await postService.fetchAllPosts();
  //   if (posts) {
  //     setPosts(posts);
  //   }
  //   setIsLoading(false);
  // }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <div key={i}>
          <FeedItem data={post} cUser={cUser} deletePost={deletePost} />
        </div>
      ))}
    </div>
  );
}

export default Feed;
