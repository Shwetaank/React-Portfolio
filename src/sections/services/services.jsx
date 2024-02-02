import React from "react";
import data from "./data";
import Card from "../../components/card";
import "./services.css";
import data1 from "./data1";

export const services = () => {
  return (
    <section id="services">
      <h2>My Services & Skills</h2>
      <div className="Services__Skills">
        <h3>My Services</h3>
        <p>I deliver excellence across all services below: ✨🚀 🡇</p>
        <div className="container container__services" data-aos="fade-up">
          {data.map((item) => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        <h3> My Skills </h3>
        <p>Fueled by endless curiosity, I've honed diverse skills set ✨🚀 🡇</p>
        <div className="container container__skills" data-aos="fade-up">
          {data1.map((item) => (
            <Card key={item.id} className="skills light">
              <div className="skills__icon">{item.icon}</div>
              <div className="skills_details">
                <h4>{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;
