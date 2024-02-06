// Import logo image
import Logo from "../../assets/logo.jpg";

// Import data array
import data from "./data";

// Import color palette icon
import { IoColorPaletteSharp } from "react-icons/io5";

// Import modal context hook
import { useModalContext } from "../../context/modal-context";

// Import CSS styles
import "./navbar.css";

// Navbar component
const Navbar = () => {
  // Destructure the showModalHandler function from the modal context
  const { showModalHandler } = useModalContext();

  return (
    // Navigation container
    <nav>
      {/* Container for the navigation */}
      <div className="container nav__container" data-aos="zoom-in">
        {/* Logo link */}
        <a href="index.html" className="nav__logo">
          {/* Logo image */}
          <img src={Logo} alt="Logo" />
        </a>
        {/* Menu list */}
        <ul className="nav__menu">
          {/* Map through the data array to create menu items */}
          {data.map((item) => (
            <li key={item.id}>
              {/* Menu item */}
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* Theme icon button */}
        <button id="theme__icon" onClick={showModalHandler}>
          {/* Color palette icon */}
          <IoColorPaletteSharp />
        </button>
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
