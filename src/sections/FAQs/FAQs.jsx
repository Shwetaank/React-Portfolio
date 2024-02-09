import { useEffect } from "react";
import faqs from "./data";
import "./FAQs.css";
import FAQ from "./FAQ";
import "aos/dist/aos.css";
import AOS from "aos";

// Component for rendering Frequently Asked Questions
const FAQs = () => {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Render FAQs section
  return (
    <section id="faqs" data-aos="fade-in">
      <h2>Frequently Asked Questions</h2>
      <p className="container">
        🌟 Delve into commonly asked questions! Click to unveil the answers.
        Have more queries? Drop me a message right from here! 📩
      </p>
      <div className="container faqs__container" data-aos="fade-right">
        {/* Map through FAQs data and render each FAQ component */}
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
