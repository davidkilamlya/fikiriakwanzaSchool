import React from "react";
import "./Whatsapp.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
function Whatsapp() {
  return (
    <div className="whatsapp">
      <span className="whatsapp-text">do you have question?</span>
      <div>
        <a href="https://api.whatsapp.com/send?phone=255768777892&text=hello I want to apply but I need procedures?">
          <AiOutlineWhatsApp />
        </a>
        <div className="whatsapp-alert-red"></div>
      </div>
    </div>
  );
}

export default Whatsapp;
