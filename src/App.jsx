// Import React and necessary components
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

// Define the main App component
const App = () => {
  // Extract themeState from the theme context
  const { themeState } = useThemeContext();

  // Create a reference for the main section
  const mainRef = useRef();
  // State to control the visibility of the floating navigation
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  // State to keep track of the site's vertical position
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

    // Update the site's vertical position
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  }, [siteYPosition]);

  // Set up an effect to run the floatingNavToggleHandler at regular intervals
  useEffect(() => {
    // Interval to check the vertical position every 3000 milliseconds (3 seconds)
    const checkYPosition = setInterval(floatingNavToggleHandler, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(checkYPosition);
  }, [siteYPosition, floatingNavToggleHandler]);

  // Render the main structure of the app
  return (
    <>
      <main
        className={`${themeState.primary} ${themeState.background}`}
        ref={mainRef}
      >
        {/* Render all the sections of the app */}
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
        {/* Render the floating navigation if showFloatingNav is true */}
        {showFloatingNav && <FloatingNav />}
      </main>
    </>
  );
};

// Export the App component as the default export
export default App;
