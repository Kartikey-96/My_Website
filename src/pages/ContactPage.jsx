import React from "react";
import Navbar from "../component/Navbar";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
