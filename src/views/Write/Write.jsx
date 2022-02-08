import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <TopBar />
      <img className="writeImg" src="https://images.indianexpress.com/2020/01/nail-polish-1.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Write your story . . ." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
