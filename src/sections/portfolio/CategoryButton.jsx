import { FaTag, FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

// Define category icons mapping
const categoryIcons = {
  default: FaTag,
  "Vanilla JS": IoLogoJavascript,
  Frontend: FaReact,
  Backend: FaServer,
  "Mobile App": MdOutlinePhoneAndroid,
  Web3: SiHiveBlockchain,
};

// Component for rendering category button with icon
const CategoryButton = ({ category, className, onChangeCategory }) => {
  // Get the corresponding icon component based on the category
  const Icon = categoryIcons[category] || categoryIcons.default;

  return (
    // Render button with icon and category text
    <button
      className={`category-button ${className}`}
      onClick={() => onChangeCategory(category)}
    >
      <Icon className="category-icon" />
      {category}
    </button>
  );
};

export default CategoryButton;
