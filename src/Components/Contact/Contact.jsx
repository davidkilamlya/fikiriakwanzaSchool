import React from "react";
import "./Contact.scss";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiTwotonePhone } from "react-icons/ai";
function Contact({ IconColor, position, backgroundColor }) {
  return (
    <div
      className="contact"
      style={{ position: position, backgroundColor: backgroundColor }}
    >
      <div className="container">
        <div className="contact-social">
          {/* <div className="facebook">
            <BsFacebook className="icon" style={{ color: IconColor }} />
            <span className="contact-details">Fikiria Kwanza</span>
          </div> */}
          {/* <div className="instagram">
            <AiFillInstagram className="icon" style={{ color: IconColor }} />
            <span className="contact-details">Fikiria Kwanza</span>
          </div> */}
          {/* <div className="facebook">
            <BsLinkedin className="icon" style={{ color: IconColor }} />
            <span className="contact-details">Fikiria Kwanza</span>
          </div> */}
        </div>

        <div className="contact-phone-email contact-social">
          <a href="tel:255768777892" className="call">
            <AiTwotonePhone className="icon" style={{ color: IconColor }} />
            <span className="contact-details">+255768777892</span>
          </a>
          <a href="mailto:info@fikiriakwanza.ac.tz" className="call">
            <MdEmail className="icon" style={{ color: IconColor }} />
            <span className="contact-details">info@fikiriakwanza.ac.tz</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
