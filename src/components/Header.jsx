import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Theme from "./Theme";

const Header = () => {
  const [isActive, setIsActive] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Projects") {
      setIsActive(1);
    }
    if (location.pathname === "/APropos") {
      setIsActive(2);
    }
  }, [location]);



  return (
    <header className="transtransY">
      <Logo />
      <ul>
        <Link to="/Projects" className="boule">
          <li className={` ${isActive === 1 ? "transp" : ""}`}>projects</li>
        </Link>
        <Link to="/APropos" className="boule">
          <li className={` ${isActive === 2 ? "transa" : ""}`}>A propos</li>
        </Link>
        <li className="theme">
          <Theme />
        </li>
      </ul>
    </header>
  );
};

export default Header;
