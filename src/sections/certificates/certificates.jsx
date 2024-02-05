import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./certificates.css";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaCodeBranch } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import School from "../../assets/School.jpg";
import data from "./data";
import data1 from "./data1";
import Card from "../../components/card";

const Certificates = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="Certificates" data-aos="fade-up">
        <h2>Education & Certification </h2>
        <h3>Education</h3>
        <div className="container school__container">
          <div className="school__left" data-aos="fade-right">
            <div className="school__portrait">
              <img src={School} alt="School-Img" />
            </div>
          </div>
          <div className="school__right" data-aos="fade-left">
            <div className="school__cards">
              {data.map((item) => (
                <Card key={item.id} className="school__card">
                  <span className="school__card-icon">
                    <LiaUniversitySolid />
                  </span>
                  <h5>{item.Uni}</h5>
                  <p>
                    <strong>
                      <FaCodeBranch /> --{item.branch}
                    </strong>
                  </p>
                  <strong>
                    {item.Year}
                    <small>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Visit Site</strong>
                      </a>
                    </small>
                  </strong>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <h3>Certificates</h3>
        <div className="container certification__container" data-aos="zoom-in">
          <p>
            Each course is a stepping stone in my journey, equipping me with a
            versatile skill set to tackle real-world challenges in the dynamic
            landscape of technology. 🌐💡 Ready for the next exciting chapter!
            🚀🎓
          </p>
          <div className="certificate__cards">
            {data1.map((item) => (
              <Card key={item.id} className="certificate__card">
                <strong className="certificate__card-icon">
                  <GrCertificate />
                </strong>
                <img
                  src={item.Img}
                  alt="Certificate of Imagae"
                  className="certificate__image"
                />
                <h5>{item.tittle}</h5>
                <p>{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  <CgWebsite className="certificate-icon" /> Visit
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
