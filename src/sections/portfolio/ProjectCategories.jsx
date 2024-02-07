import { useState } from "react";
import CategoryButton from "./CategoryButton";

/**
 * Component for rendering project categories and handling category filtering.
 * @param {Object} props - Component props
 * @param {string[]} props.categories - Array of category names
 * @param {Function} props.onFilterProjects - Function to handle project filtering
 */
const ProjectCategories = ({ categories, onFilterProjects }) => {
  // State to manage the active category
  const [activeCategory, setActiveCategory] = useState("All");

  // Handler function for changing the active category
  const changeCategoryHandler = (activeCat) => {
    // Set the active category
    setActiveCategory(activeCat);
    // Call the parent function to filter projects
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio__categories" data-aos="zoom-in">
      {/* Mapping through categories to render CategoryButton */}
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          // Applying conditional classes based on activeCategory
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectCategories;
