import React from "react";
import ShopItems from "../../components/ShopComponents/ShopItems/ShopItems";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./shop.css";

export default function Shop() {
  return (
    <div>
      <Header title="Shop Fantasy" title2="Nails Fantasy" />

      <div className="shopWrapper">
        <ShopItems />
      </div>
      <Footer />
    </div>
  );
}
