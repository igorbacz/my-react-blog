import "./contactInfo.css";

export default function ContactInfo() {
  return (
    <div>
      <div className="contactInfo">
        <span className="contactTitle">CONTACT INFO</span>
        <div className="contactAdress">
          <span className="contactTitle">LOCATION</span>
        </div>
        <div className="location">
          <i className="locationIcon fas fa-location-arrow"></i>
          Stary Rynek 37, Poznań
        </div>
        <div className="location">
          <i className="locationIcon fas fa-phone-alt"></i>
          +48 123 456 789
        </div>
        <div className="location">
          <i className="locationIcon fas fa-envelope"></i>
          poznan.restaurant@restaurant.com
        </div>
      </div>
    </div>
  );
}
