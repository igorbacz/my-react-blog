import React from "react";
import SinglePost from "../../components/singlePost/SinglePost";
import "./singlePage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import "./singlePage.css";

export default function SinglePage() {
  return (
    <div>
      <Header />
      <div className="singlePage">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}
