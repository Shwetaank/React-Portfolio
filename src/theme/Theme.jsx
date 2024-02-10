import Modal from "../components/Modal";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import { primaryColors, backgroundColors } from "./data";
import "./theme.css";

// Theme component to allow users to personalize their theme
const Theme = () => {
  return (
    // Modal component containing theme customization options
    <Modal className="theme__modal">
      {/* Title */}
      <h3>Personalize Your Theme</h3>

      {/* Description */}
      <small>Change the primary color to your Preference.</small>

      {/* Section for selecting primary color */}
      <div className="theme__primary-wrapper">
        {/* Title */}
        <h5>Primary Color</h5>

        {/* Display primary color options */}
        <div className="theme__primary-colors">
          {/* Map through primaryColors data to render PrimaryColor components */}
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} /> // Pass key and className as props to PrimaryColor component
          ))}
        </div>
      </div>

      {/* Section for selecting background color */}
      <div className="theme__background-wrapper">
        {/* Title */}
        <h5>Background Color</h5>

        {/* Display background color options */}
        <div className="theme__background-colors">
          {/* Map through backgroundColors data to render BackgroundColor components */}
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className} // Pass key and className as props to BackgroundColor component
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
