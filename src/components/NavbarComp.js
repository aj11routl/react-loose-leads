import { Link } from "react-router-dom";
import "./components.css";

function NavbarComp() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to={"/waitlist"}>Waitlist</Link>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarComp;
