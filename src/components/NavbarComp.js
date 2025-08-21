import { Link } from "react-router-dom";
import { useState } from "react";
import "./components.css";

import NavbarButtonComp from "./NavbarButtonComp";

function NavbarComp({ page }) {
  const [navbarFixed, setNavbarFixed] = useState(false);

  let oldLastKnownScrollY = 0;
  let newLastKnownScrollY = 0;
  let ticking = false;

  //check for scroll
  document.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    newLastKnownScrollY = window.scrollY;

    if (!ticking && newLastKnownScrollY < oldLastKnownScrollY) {
      //only run this code if scrolling up
      window.requestAnimationFrame(() => {
        onScrollUp();
        ticking = false;
      });

      ticking = true;
    } else {
      onScrollDown();
    }

    oldLastKnownScrollY = newLastKnownScrollY;
  });

  function onScrollUp() {
    console.log("going up");
    setNavbarFixed(true);
  }

  function onScrollDown() {
    console.log("going down");
    setNavbarFixed(false);
  }
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
      {navbarFixed === true && (
        <div className="navbar-sticky">
          <NavbarButtonComp
            current={page == 2}
            text="Waitlist"
            link="/waitlist"
          />
          <NavbarButtonComp current={page == 1} text="Home" link="/" />
          <NavbarButtonComp current={page == 3} text="About" link="/about" />
        </div>
      )}
    </div>
  );
}

export default NavbarComp;
