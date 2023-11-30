import React, { useState } from "react";
import Posts from "../Posts/Posts";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../data/dummy-data";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("testing from the virtual DOM");

  const likePost = (postId) => {
    setPosts(
      posts.map((post) => {
        if (postId !== post.id) return post;
        let updatedPost = { ...post, likes: post.likes + 1 };
        return updatedPost;
      })
    );
  };

  return (
    <div className="App">
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
