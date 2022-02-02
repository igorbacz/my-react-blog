import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="dress.jpeg" alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory"> Lifestyle</span>
          <span className="postCategory"> Fashion</span>
        </div>
        <span className="postTitle">Florals in Fall</span>
        <hr />
        <span className="postDate"> 1.01.2022 r.</span>
      </div>
      <p className="postDesc">There`s something very special about stumbling across a brand in the magical woodland that is Instagram.</p>
    </div>
  );
}
