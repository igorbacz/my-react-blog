import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./contact.css";
import ContactAll from "../../components/ContactComponents/ContactAll/ContactAll";
import Footer from "../../components/Footer/Footer";

export default function ContactPage() {
  return (
    <div>
      <Header title="Contact" title2="Nails Fantasy" />
      <div className="contactPage">
        <ContactAll />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
