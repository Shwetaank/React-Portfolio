import React from "react";
import { FaHeart } from "react-icons/fa";
import { links, socials } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__contyainer">
        <ul className="nav__menu">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}> {fLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((socail) => (
            <a
              key={socail.id}
              href={socail.link} // Fix here, it should be socail.link
              target="_blank"
              rel="noopener noreferrer"
            >
              {socail.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>
          2024 Sin_Greed. &copy; All Rights Reserved. <br />
          Infused with <FaHeart />.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
