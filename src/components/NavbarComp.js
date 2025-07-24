import { Link } from "react-router-dom";
import "./components.css";

import NavbarButtonComp from "./NavbarButtonComp";

function NavbarComp({ page }) {
  return (
    <div>
      <div className="navbar">
        <NavbarButtonComp
          current={page == 2}
          text="Waitlist"
          link="/waitlist"
        />
        <NavbarButtonComp current={page == 1} text="Home" link="/" />
        <NavbarButtonComp current={page == 3} text="About" link="/about" />
      </div>
    </div>
  );
}

export default NavbarComp;
