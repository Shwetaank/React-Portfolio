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
          "Welcome, <strong> Guest! </strong> I'm{" "}
          <strong> Shwetank Morey</strong>, a Freelance{" "}
          <strong>MERN stack developer </strong>
          venturing into the exciting realm of <strong>Web 3.0</strong>{" "}
          (Blockchain Technology). Proficient in <strong> DSA </strong>, I
          intricately craft solutions. 🧩 This coding journey isn't merely about
          lines of code; it's a journey of innovation, a stage for creativity.
          🚀 Let's turn ideas into reality! 💡"
        </p>

        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Works
          </a>
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
