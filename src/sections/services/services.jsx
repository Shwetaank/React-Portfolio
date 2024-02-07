import React from "react";
import data from "./data"; // Importing data for services
import Card from "../../components/card"; // Importing Card component
import "./services.css"; // Importing CSS styles for services
import data1 from "./data1"; // Importing data for skills

// Services component
export const Services = () => {
  return (
    // Section containing services and skills
    <section id="services" data-aos="fade-up">
      {/* Section title */}
      <h2>My Services & Skills</h2>

      {/* Container for services */}
      <div className="container container__services">
        {/* Subsection for services */}
        <div className="services__main">
          {/* Subtitle for services */}
          <h3>My Services</h3>
          {/* Description for services */}
          <p>
            Step into a world of unparalleled excellence! From sky-high
            standards to inspiring empowerment, we deliver nothing but the best.
            Let's soar together towards success! ✨🚀🡇
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
          <h3> My Skills </h3>
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
