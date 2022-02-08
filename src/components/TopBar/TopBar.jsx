import "./topBar.css";
import React from "react";
import { Link } from "react-router-dom";

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
            <li className="menuItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="menuItem">BLOG</li>
            <li className="menuItem">
              <Link className="link" to="Shop">
                {" "}
                SHOP
              </Link>
            </li>
            <li className="menuItem">
              <Link className="link" to="Write">
                WRITE
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link className="link" to="ContactPage">
                CONTACT
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link className="link" to="Settings">
                SETTINGS
              </Link>
            </li>
          </ul>
        </div>
        <div className="topSearch">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
