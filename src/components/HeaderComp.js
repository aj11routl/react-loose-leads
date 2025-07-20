import logo from "../images/logo-short.JPG";
import { Link } from "react-router-dom";
import "./components.css";

import NavbarComp from "./NavbarComp.js";

function HeaderComp() {
  return (
    <div>
      <NavbarComp />
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
