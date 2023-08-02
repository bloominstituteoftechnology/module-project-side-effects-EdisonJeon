import React from "react";
import Post from "./Post";

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {posts.map((post) => (
        <Post key={post.id} likePost={likePost} post={post} />
      ))}
    </div>
  );
};

export default Posts;
