// a component for a navbar which scrolls in (appears on scroll up)
import { Link } from "react-router-dom";
import "./components.css";

import NavbarButtonComp from "./NavbarButtonComp";
import { useState } from "react";

function ScrollNavbarComp({ page, shown = true }) {
  const [scrolledIn, setScrolledIn] = useState(true);

  const fixedStyle = {
    position: "fixed",
    WebkitTransition: "all .2s ease-in-out",
    MozTransition: "all .2s ease-in-out",
    OTransition: "all .2s ease-in-out",
    transition: "all .2s ease-in-out",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const hiddenStyle = {
    WebkitTransform: "translateY(-100%)",
    MsTransform: "translateY(-100%)",
    transform: "translateY(-100%)",
  };

  const scrolledInStyle = {
    WebkitTransform: "translateY(0)",
    MsTransform: "translateY(0)",
    transform: "translateY(0)",
  };

  let renderStyle = fixedStyle;
  renderStyle = !shown
    ? { ...renderStyle, ...hiddenStyle }
    : { ...renderStyle, ...scrolledInStyle };

  return (
    <div>
      <div
        className={"navbar" + (scrolledIn ? "-scrolledin" : "")}
        style={renderStyle}
      >
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

export default ScrollNavbarComp;
