import React, { useState } from "react";
import "./Posts.css";
import posts from "./posts.json";

export default function Posts() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeButtonClick = (type) => {
    setSelectedType(type);
  };

  const [sliced, setSliced] = useState(6);

  const handleLoadMore = () => {
    setSliced((prevVisibleCategories) => prevVisibleCategories + 2);
  };

  let filteredCategories = posts;

  if (selectedType === null) {
    filteredCategories = posts;
  }

  if (selectedType !== null) {
    filteredCategories = selectedType
      ? posts.filter((category) => category.type === selectedType)
      : [];
  }

  return (
    <div id="posts">
      <div id="postcon">
        <div id="postsleft">
          {filteredCategories.slice(0, sliced).map((post) => (
            <div className="postdivs">
              <div style={{ height: "65%" }}>
                <img src={post.image} alt="image1" />
              </div>
              <p style={{ height: "10%", marginTop: "5px" }}>{post.name}</p>
              <p style={{ height: "10%", color: "#0071bd" }}>
                {post.type} / {post.author} / {post.date}
              </p>
              <p style={{ height: "10%" }}>{post.content}</p>
            </div>
          ))}
        </div>
        <div
          id="load"
          style={{ color: "blue", userSelect: "none" }}
          onClick={handleLoadMore}
        >
          Load More..
        </div>
      </div>

      <div id="postsright">
        <p>Categories</p>
        <ul id="types">
          <li onClick={() => handleTypeButtonClick(null)}>
            <p>All</p>
          </li>
          <li onClick={() => handleTypeButtonClick("Notice")}>
            <p>Notice</p>
          </li>
          <li onClick={() => handleTypeButtonClick("Event")}>
            <p>Event</p>
          </li>
        </ul>
        <p>Archives</p>
        <ul>
          <li>
            <p>March 2024</p>
          </li>
          <li>
            <p>February 2024</p>
          </li>
          <li>
            <p>January 2024</p>
          </li>
          <li>
            <p>December 2024</p>
          </li>
          <li>
            <p>November 2024</p>
          </li>
          <li>
            <p>Others</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
