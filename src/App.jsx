import React from "react";
import ContactPage from "./views/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
//import SinglePost from "./components/SinglePost/SinglePost";
import SinglePage from "./views/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="SinglePage" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
