import React from "react";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsPP">
            <img src="https://images.zwierciadlo.pl/_resource/res/path/7c/55/7c55022a-7efd-497f-904f-f689da750558_f1400x900" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-portrait"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Iwona" />
          <label>Email</label>
          <input type="email" placeholder="i.gorbacz@gmail.com" />
          <label>Password</label>
          <input type="password" />

          <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  );
}
