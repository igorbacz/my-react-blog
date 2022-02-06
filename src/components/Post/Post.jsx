import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="post1.jpeg" alt="" />
      <div className="postInfo">
        <span className="postTitle">
          <h5>
            <Link className="link" to="SinglePage">
              Florals in Fall{" "}
            </Link>{" "}
          </h5>
        </span>
        <hr />
        <span className="postDate"> 1.01.2022 r.</span>
      </div>
      <p className="postDesc">There`s something very special about stumbling across a brand in the magical woodland that is Instagram.</p>
    </div>
  );
}
