import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./singlePage.css";
import SideBar from "../../components/SideBar/SideBar";
import "./singlePage.css";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <SinglePost />
      <SideBar />
    </div>
  );
}
