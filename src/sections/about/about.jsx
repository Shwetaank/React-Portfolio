// Importing necessary assets and dependencies
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/card";
import "./about.css";

// Functional component for the About section
const about = () => {
  return (
    <>
      <section id="about" data-aos="fade-in">
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__left" data-aos="fade-right">
            <div className="about__portrait">
              <img src={AboutImage} alt="About Img" />
            </div>
          </div>
          <div className="about__right">
            <div className="about__cards" data-aos="fade-left">
              {/* Mapping through data to render cards */}
              {data.map((item) => (
                <Card key={item.id} className="about__card">
                  <span
                    className="about__card-icon"
                    data-aos="flip-up"
                    data-aos-easing="linear"
                    data-aos-duration="3000"
                  >
                    {item.icon}
                  </span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))}
            </div>
            {/* Main introduction */}
            <p data-aos="fade-up">
              "Empower your digital vision with a touch of magic! ✨ Whether you
              envision{" "}
              <strong>
                a sleek website, a dynamic e-commerce platform, a standout
                portfolio, or even cutting-edge blockchain apps
              </strong>
              , I'm here to make it happen. 🚀 Let's collaboratively craft an
              online experience that not only speaks volumes but leaves a
              lasting impression. 🎨 Elevate your brand with seamless,
              responsive, and stunning web solutions. 🌐 Your journey towards
              digital excellence begins here! 🌟"
            </p>
            <p data-aos="fade-up">
              Greetings, I'm <strong> Shwetank Morey </strong>, a dedicated 🎓
              Full Stack Engineer 🛠️ based in Pune, India. Despite my background
              in Mechanical Engineering, I've embarked on a thrilling
              freelancing journey that merges creativity with cutting-edge
              technology. Ensuring your business excels online is not merely a
              task; it's a commitment I bring to every project, adding that
              extra sparkle to your digital presence 💼. Dive into the intricate
              details by exploring my
              <strong> resume </strong> below.
            </p>
            {/* Download CV button */}
            <a href={CV} download className="btn primary" data-aos="fade-left">
              Download CV <HiDownload />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
