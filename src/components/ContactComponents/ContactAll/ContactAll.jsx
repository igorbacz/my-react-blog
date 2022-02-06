import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import "./contactAll.css";
import GoogleMap from "../GoogleMap/GoogleMap";

export default function ContactAll() {
  return (
    <div className="contactAll">
      <ContactInfo />
      <GoogleMap />
    </div>
  );
}
