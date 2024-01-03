import Hexagon from "./Hexagon";
import Theme from "./Theme";

const Header = () => {
  const onClick2 = () => {
    window.location.href = "#Projects";
  };
  const onClick3 = () => {
    window.location.href = "#APropos";
  };

  return (
    <header className=" head">
      <Hexagon className=" head_logo" lien={"#accueil"} text1={"AE"} />
      <ul>
        <li onClick={onClick2} className="head_menu">
          projects
        </li>
        <li onClick={onClick3} className="head_menu">
          A propos
        </li>
        <li className="theme">
          <Theme />
        </li>
      </ul>
    </header>
  );
};

export default Header;
