import React from "react";
import Navbar from "./sections/navbar/navbar";
import Header from "./sections/header/header";
import About from "./sections/about/about";
import Services from "./sections/services/services";
import Blog from "./sections/blogs/blog";
import Portfolio from "./sections/portfolio/portfolio";
import Testimonails from "./sections/testimonials/testimonails";
import FAQs from "./sections/FAQs/FAQs";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import FloatingNav from "./sections/floating-nav/floatingNav";
import Certificates from "./sections/certificates/certificates";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const { themeState } = useThemeContext();
  return (
    <>
      <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Header />
        <About />
        <Certificates />
        <Services />
        <Blog />
        <Portfolio />
        <Testimonails />
        <FAQs />
        <Contact />
        <Footer />
        <Theme />
        {/* <FloatingNav /> */}
      </main>
    </>
  );
};

export default App;
