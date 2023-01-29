import React from "react";
import Logo from "../assets/logo-blackwhite.png";
import List from "../components/List";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img
        src={Logo}
        alt="Little Lemon black and white logo"
        style={{ cursor: "pointer" }}
      />
      <List
        title="Doormat Navigation"
        list={[
          "Home",
          "About",
          "Menu",
          "Reservations",
          "Order Online",
          "Login",
        ]}
      />
      <List title="Contact" list={["Address", "Phone Number", "Email"]} />
      <List
        title="Social Media Links"
        list={["Facebook", "Twitter", "Instagram"]}
      />
    </div>
  );
};

export default Contact;
