import React from "react";
import FeedItem from "./FeedItem";

function Feed() {
  return (
    <div>
      {[1, 2, 3, 4].map((feed) => (
        <div key={feed}>
          <FeedItem />
        </div>
      ))}
    </div>
  );
}

export default Feed;
