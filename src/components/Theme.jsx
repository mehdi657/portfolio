import React, { useContext } from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { ThemeContext } from "../utils/context";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const bodyClass = theme === "theme_jour" ? "theme_jour" : "theme_nuit";

  document.body.className = bodyClass;

  return (
    <label className="switch">
      <img
        src={sun}
        alt="soleil"
        className={`sun ${theme === "theme_nuit" ? "hidden" : ""}`}
      />
      <img
        src={moon}
        alt="lune"
        className={`moon ${theme === "theme_jour" ? "hidden" : ""}`}
      />
      <input
        id="input"
        type="checkbox"
        className="input"
        checked={theme === "theme_nuit"}
        onChange={handleToggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Theme;
