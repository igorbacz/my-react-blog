import React from "react";
import ContactInfo from "../../components/ContactComponents/ContactInfo/ContactInfo";
import MapContainer from "../../components/ContactComponents/GoogleMap/GoogleMap";
import Header from "../../components/Header/Header";
import TopBar from "../../components/TopBar/TopBar";
import "./contact.css";

export default function ContactPage() {
  return (
    <div>
      <TopBar />
      <Header title="Contact" title2="Nails Fantasy" />
      <ContactInfo />
      <MapContainer />
    </div>
  );
}
