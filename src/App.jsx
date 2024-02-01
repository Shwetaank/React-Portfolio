import React, { useRef, useState, useEffect, useCallback } from "react";
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

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  // Memoize the function using useCallback
  const floatingNavToggleHandler = useCallback(() => {
    // Move the definition of showFloatingNavHandler inside the useCallback callback
    const showFloatingNavHandler = () => {
      setShowFloatingNav(true);
    };

    // check if we scrolled up or down at least 20px
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      setShowFloatingNav(false); // directly set it to false without calling the function
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }, [siteYPosition]);

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 3000);

    // Cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition, floatingNavToggleHandler]);

  return (
    <>
      <main
        className={`${themeState.primary} ${themeState.background}`}
        ref={mainRef}
      >
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
        {showFloatingNav && <FloatingNav />}
      </main>
    </>
  );
};

export default App;
