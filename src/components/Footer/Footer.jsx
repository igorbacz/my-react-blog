import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left-piece">
        <h3>Nails Fantasy</h3>
      </div>
      <div className="center-piece">
        <ul className="topList">
          <li className="menuItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="menuItem">BLOG</li>
          <li className="menuItem"> SHOP</li>
          <li className="menuItem">
            {" "}
            <Link className="link" to="ContactPage">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-piece">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-tiktok"></i>
      </div>
    </div>
  );
}
