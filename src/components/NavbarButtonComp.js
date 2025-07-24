import { Link } from "react-router-dom";
import "./components.css";

function NavbarButtonComp({
  text = "Default",
  link = "default",
  current = false,
}) {
  return (
    <Link to={link}>
      <div className="navbar-button">
        <div className={"navbar-shape" + (current ? "" : "-transparent")} />
        <div>{text}</div>
      </div>
    </Link>
  );
}

export default NavbarButtonComp;
