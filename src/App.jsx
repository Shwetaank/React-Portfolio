import React from "react";
import Navbar from "./sections/navbar/navbar";
import Header from "./sections/header/header";
import About from "./sections/about/about";
import Services from "./sections/services/services";
import Portfolio from "./sections/portfolio/portfolio";
import Testimonails from "./sections/testimonials/testimonails";
import FAQs from "./sections/FAQs/FAQs";

import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import FloatingNav from "./sections/floating-nav/floatingNav";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonails />
        <FAQs />
        <Contact />
        <Footer />
        <FloatingNav />
      </main>
    </>
  );
};

export default App;
