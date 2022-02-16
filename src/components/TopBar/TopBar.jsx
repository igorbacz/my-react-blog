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
              <Link className="link" exact to="/">
                HOME
              </Link>
            </li>
            <li className="menuItem">BLOG</li>
            <li className="menuItem">
              <Link className="link" to="shop">
                {" "}
                SHOP
              </Link>
            </li>
            <li className="menuItem">
              <Link className="link" to="write">
                WRITE
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link className="link" to="contact_page">
                CONTACT
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link className="link" to="settings">
                SETTINGS
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link className="link" to="login">
                LOGIN
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link className="link" to="register">
                REGISTER
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
