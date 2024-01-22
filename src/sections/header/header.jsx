import React from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Shwetank Morey</h3>
        <p>
          Greetings to the vast and dynamic world! I'm
          <strong> Shwetank Morey</strong>, a seasoned MERN stack developer,
          ready to weave digital magic in the realm of professional web
          development. While I dance through the intricacies of MERN, I'm also
          embarking on a thrilling journey into the cutting-edge landscapes of
          Web 3.0 as a curious beginner. Simultaneously, I'm mastering the
          symphony of Data Structures and Algorithms, crafting solutions to
          intricate problems with finesse. This coding odyssey is not just about
          lines of code; it's a canvas for innovation, a stage for creativity.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Works</a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
