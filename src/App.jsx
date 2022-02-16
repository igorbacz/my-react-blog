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
        <Route path="/" exact element={<Home />} />
        <Route path="contact_page" element={<ContactPage />} />
        <Route path="single_page" element={<SinglePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="write" element={<Write />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
