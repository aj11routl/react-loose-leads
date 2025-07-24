import logo from "../images/logo-short.JPG";
import { Link } from "react-router-dom";
import "./components.css";

import NavbarComp from "./NavbarComp.js";

// page is the current page
function HeaderComp({ page }) {
  return (
    <div>
      <NavbarComp page={page} />
      <div className="header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="shape" />
    </div>
  );
}

export default HeaderComp;
