import { Link } from "react-router-dom";
import { useState } from "react";
import "./components.css";

function NavbarButtonComp({
  text = "Default",
  link = "default",
  current = false,
}) {
  const [state, setState] = useState(current);

  return (
    <Link to={link}>
      <div
        className="navbar-button"
        onMouseOver={() => setState(true)}
        onMouseOut={() => setState(current)}
      >
        <div className={"navbar-shape" + (state ? "" : "-transparent")} />
        <div>{text}</div>
      </div>
    </Link>
  );
}

export default NavbarButtonComp;
