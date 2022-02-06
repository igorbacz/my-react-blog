import React from "react";
import ContactInfo from "../../components/ContactComponents/ContactInfo/ContactInfo";
import MapContainer from "../../components/ContactComponents/GoogleMap/GoogleMap";
import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import "./contact.css";
import ContactAll from "../../components/ContactComponents/ContactAll/ContactAll";
import Footer from "../../components/Footer/Footer";

export default function ContactPage() {
  return (
    <div>
      <TopBar />
      <Header title="Contact" title2="Nails Fantasy" />
      <div className="contactPage">
        <ContactAll />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
