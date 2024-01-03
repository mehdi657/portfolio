import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme_jour");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "theme_jour" ? "theme_nuit" : "theme_jour"));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
