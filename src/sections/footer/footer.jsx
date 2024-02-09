import { FaHeart } from "react-icons/fa";
import { links, socials } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer data-aos="fade-in">
      <div className="container footer__container">
        <ul className="nav__menu" data-aos="zoom-in">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}> {fLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials" data-aos="fade-up">
          {socials.map((socail) => (
            <a
              key={socail.id}
              href={socail.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="flip-up"
            >
              {socail.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>
          <strong> Sin_Greed.</strong> 2024 &copy; All Rights Reserved. <br />
          Infused with <FaHeart />.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
