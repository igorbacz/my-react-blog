import "./topBar.css";
import React from "react";

export default function TopBar() {
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-tiktok"></i>
        </div>

        <div className="topRight">
          <ul className="topList">
            <li className="menuItem">HOME</li>
            <li className="menuItem">BLOG</li>
            <li className="menuItem"> SHOP</li>
            <li className="menuItem"> CONTACT</li>
          </ul>
        </div>
        <div className="topSearch">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
