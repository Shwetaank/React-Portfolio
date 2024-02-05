import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();
const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  // Save theme settings to the local storage
  useEffect(() => {
    const saveThemeSettings = () => {
      localStorage.setItem("themeSettings", JSON.stringify(themeState));
    };

    saveThemeSettings();  // Call the function directly

    // Include themeState in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use our theme context wherever we want in the project
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

