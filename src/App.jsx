import React from "react";
import ContactPage from "./views/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
//import SinglePost from "./components/SinglePost/SinglePost";
import SinglePage from "./views/SinglePage/SinglePage";
import Shop from "./views/Shop/Shop";
import Write from "./views/Write/Write";
import Settings from "./views/Settings/Settings";
import Login from "./views/Login/Login";
import TopBar from "./components/TopBar/TopBar";
import Register from "./views/Register/Register";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="SinglePage" element={<SinglePage />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Write" element={<Write />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
