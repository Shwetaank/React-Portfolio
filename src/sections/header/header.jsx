import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

// Header component
const Header = () => {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Render header component
  return (
    <header id="header">
      <div className="container header__container">
        {/* Profile image */}
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>

        {/* Header text */}
        <h3 data-aos="fade-up">Shwetank Morey</h3>
        <p data-aos="fade-up">
          "Welcome, <strong> Guest! </strong> I'm{" "}
          <strong> Shwetank Morey</strong>, a Freelance{" "}
          <strong>MERN Web stack developer </strong> venturing into the exciting
          realm of <strong>Web 3.0</strong> (Blockchain Technology). Proficient
          in <strong> DSA </strong>, I intricately craft solutions. 🧩 This
          coding journey isn't merely about lines of code; it's a journey of
          innovation, a stage for creativity. 🚀 Let's turn ideas into reality!
          💡"
        </p>
        {/* Call to action buttons */}
        <div className="header__cta" data-aos="zoom-in">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Works
          </a>
        </div>
        {/* Social media links */}
        <div className="header__socials" data-aos="fade-right">
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
