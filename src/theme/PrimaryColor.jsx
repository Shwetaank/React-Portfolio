import { useThemeContext } from "./../context/theme-context";

// PrimaryColor component receives a className prop and uses useThemeContext to access the themeHandler function
const PrimaryColor = ({ className }) => {
  // Destructuring themeHandler function from the useThemeContext hook
  const { themeHandler } = useThemeContext();

  // Render a button with the provided className
  // Attach an onClick event handler to call themeHandler function with the className argument
  return (
    <button
      className={className}
      // Call themeHandler function with the provided className as argument when button is clicked
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default PrimaryColor;
