import React from "react";
import FeedItem from "../FeedItem";
function Feed({ posts, cUser, deletePost }) {
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
