import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./singlePage.css";
import SideBar from "../../components/SideBar/SideBar";
import "./singlePage.css";
import TopBar from "../../components/TopBar/TopBar";

export default function SinglePage() {
  return (
    <div>
      <TopBar />
      <div className="singlePage">
        <SinglePost />
        <SideBar />
      </div>
    </div>
  );
}
