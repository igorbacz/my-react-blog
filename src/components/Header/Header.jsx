import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 className="headerTitle">{props.title}</h1>
        <h3 className="headerTitleSm">{props.title2}</h3>
      </div>
      <img className="headerImg" src="header-photo.jpeg" alt=""></img>
    </div>
  );
};

export default Header;
