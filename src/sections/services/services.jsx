import data from "./data";
import Card from "../../components/card";
import "./services.css";
import data1 from "./data1";

export const Services = () => {
  return (
    <section id="services" data-aos="fade-in">
      <h2>My Services & Skills</h2>
      <div className="container container__services">
        <div className="services__main">
          <h3 data-aos="zoom-in">My Services</h3>
          <p>
            Step into a world of <strong>unparalleled excellence</strong>! From{" "}
            <strong>sky-high</strong> standards to inspiring empowerment, we
            deliver nothing but <strong>the best</strong>. Let's soar together
            towards <strong>success</strong>! ✨🚀🡇
          </p>
        </div>
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
      <div className="container container__skills">
        <div className="skills__main">
          <h3 data-aos="zoom-in"> My Skills </h3>
          <p>
            Fueled by boundless curiosity, I've crafted a diverse skill set.
            ✨🚀 Let's embark on an extraordinary journey together. 🡇
          </p>
        </div>
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
