import React from "react";
import "./sideBar.css";

export default function SideBar() {
  return (
    <div id="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="womanJpg" src="woman.jpeg" alt="" />
        <p>
          Stylist and Digital Influencer, Chriselle Lim has been creating quite a stir in the fashion industry. Starting off her fashion career as a
          wardrobe stylist, she logged in years of editorial shoots with prominent fashion books and celebrities. In December 2011, Chriselle founded
          The Chriselle Factor to chronicle her daily musings and personal style. She also launched her YouTube channel to empower and inspire women
          all over the world. She helps them discover their true beauty and gives them the confidence they need to feel beautiful. Within a short
          period, 650k+ people have subscribed to her YouTube channel. With over 29 million views, Chriselle is the #1 Fashion Expert on all of
          YouTube.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Fashion</li>
          <li className="sidebarListItem">Lifestyle</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
