import React from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const Theme = () => {
  const ele = document.getElementById("body");
  const check = document.querySelector(".input");

  const handlChangeTheme = () => {
    if (ele.className.includes("theme_jour")) {
      ele.classList.add("theme_nuit");
      ele.classList.remove("theme_jour");
    } else {
      ele.classList.remove("theme_nuit");
      ele.classList.add("theme_jour");
    }
    if (check.getAttribute("checked")) {
      check.removeAttribute("checked");
    } else {
      check.setAttribute("checked", "checked");
    }
  };

  return (
    <label className="switch">
      <img src={sun} alt="soleil" className="sun" />
      <img src={moon} alt="soleil" className="moon" />
      <input
        type="checkbox"
        className="input"
        onClick={handlChangeTheme}
      ></input>
      <span className="slider"></span>
    </label>
  );
};

export default Theme;
