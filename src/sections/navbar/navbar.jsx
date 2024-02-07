// Importing the componemnt
import Logo from "../../assets/logo.jpg";
import data from "./data";
import { IoColorPaletteSharp } from "react-icons/io5";
import { useModalContext } from "../../context/modal-context";
import "./navbar.css";

// Navbar component
const Navbar = () => {
  // Destructure the showModalHandler function from the modal context
  const { showModalHandler } = useModalContext();

  // Return the JSX for the Navbar component
  return (
    <nav>
      {/* Container for the navigation */}
      <div className="container nav__container" data-aos="zoom-in">
        {/* Logo link */}
        <a href="index.html" className="nav__logo">
          {/* Logo image */}
          <img
            src={Logo}
            alt="Logo"
            data-aos="flip-up"
            data-aos-easing="linear"
            data-aos-duration="6000"
          />
        </a>
        {/* Menu list */}
        <ul className="nav__menu">
          {/* Map through the data array to create menu items */}
          {data.map((item) => (
            <li key={item.id} data-aos="flip-down">
              {/* Menu item */}
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* Theme icon button */}
        <button
          id="theme__icon"
          onClick={showModalHandler}
          data-aos="flip-up"
          data-aos-easing="linear"
          data-aos-duration="6000"
        >
          {/* Color palette icon */}
          <IoColorPaletteSharp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
