import React from "react";
import PostItem from "./PostItem";

function HomePosts({ posts, cUser, deletePost }) {
  return (
    <div>
      {posts.map((post, i) => (
        <div key={i}>
          <PostItem data={post} cUser={cUser} deletePost={deletePost} />
        </div>
      ))}
    </div>
  );
}

export default HomePosts;
