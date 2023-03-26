import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AE.png";
import logoShad from "../assets/AE-S.png";

const Logo = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="logo_cont">
      <Link
        to="/"
        className="logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={logo}
          alt="logo"
          className={`logo_img1 ${isHover ? "hidden" : ""}`}
        />
        <img
          src={logoShad}
          alt="logo"
          className={`logo_img2 ${isHover ? "" : "hidden"}`}
        />
      </Link>
    </div>
  );
};

export default Logo;
