import data from "./data";
import Card from "../../components/card";
import "./services.css";
import data1 from "./data1";

export const Services = () => {
  return (
    <section id="services" data-aos="fade-in">
      {/* Section title */}
      <h2>My Services & Skills</h2>

      {/* Container for services */}
      <div className="container container__services">
        {/* Subsection for services */}
        <div className="services__main">
          {/* Subtitle for services */}
          <h3 data-aos="zoom-in">My Services</h3>
          {/* Description for services */}
          <p>
            Step into a world of <strong>unparalleled excellence</strong>! From{" "}
            <strong>sky-high</strong> standards to inspiring empowerment, we
            deliver nothing but <strong>the best</strong>. Let's soar together
            towards <strong>success</strong>! ✨🚀🡇
          </p>
        </div>

        {/* Rendering cards for each service */}
        <div className="services__cards" data-aos="fade-right">
          {data.map((item) => (
            <Card key={item.id} className="services__card">
              <div className="services__icon">{item.icon}</div>
              <div className="services__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Container for skills */}
      <div className="container container__skills">
        {/* Subsection for skills */}
        <div className="skills__main">
          {/* Subtitle for skills */}
          <h3 data-aos="zoom-in"> My Skills </h3>
          {/* Description for skills */}
          <p>
            Fueled by boundless curiosity, I've crafted a diverse skill set.
            ✨🚀 Let's embark on an extraordinary journey together. 🡇
          </p>
        </div>

        {/* Rendering cards for each skill */}
        <div className="skills__cards" data-aos="fade-left">
          {data1.map((item) => (
            <Card key={item.id} className="skills__card">
              <div className="skills__icon" data-aos="flip-up">
                {item.icon}
              </div>
              <div className="skills__details">
                <h4>{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
