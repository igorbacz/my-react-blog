import React from "react";
import "/.singleItem.css";

const SingleItem = (props) => {
  return (
    <div className="singleItem">
      <div className="singleItem-piece">
        <h3 className="singleHeader">{props.title}</h3>
        <p>{props.description}</p>
        <img src={props.itemUrl} alt="" />
      </div>
    </div>
  );
};

export default SingleItem;
