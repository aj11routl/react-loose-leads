import "./pages.css";

import { useState, useEffect, useRef } from "react";
import tdogImg from "../images/trans-doggy.png";
import dtcImg from "../images/DTC.png";

import HeaderComp from "../components/HeaderComp";
import SmallButtonComp from "../components/SmallButtonComp";
import ParagraphComp from "../components/ParagraphComp";

function LandingPage() {
  const services = [
    {
      id: 0,
      str: "Walks",
      desc: "Walking Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    },
    {
      id: 1,
      str: "Pet Sitting",
      desc: "Pet sitting Lorem ipsum dolor sit amet consectetur adipiscing elit. Boofers ruff doggorino vvv big ol, doggo borkf.Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    },
    {
      id: 2,
      str: "Transport",
      desc: "Transport transport Lorem ipsum dolor sit amet consectetur Boofers ruff doggorino vvv big ol, doggo borkf. adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    },
  ];
  const [serviceId, setServiceId] = useState();
  const [serviceDesc, setServiceDesc] = useState("");

  //only activate the useEffect when serviceDesc changes (except for first render)
  useEffect(() => {
    // Your useEffect code here to be run on update
    //scroll to service description
    if (serviceDesc != "") {
      scrollToSmooth(document.getElementById("desc"));
    }
  }, [serviceDesc]);

  // note to self: try wheelevent to auto scroll when the user starts scrolling

  function handleClickService(number) {
    setServiceId(number);
    setServiceDesc(services[number].desc);
  }

  function scrollToSmooth(element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="App">
      <HeaderComp />

      <div className="content-section">
        <h1>About Jay's Loose Leads</h1>
        <h3>Loose Leads is more than just walks..</h3>
        <p>
          Initially, I started a dog walking service on foot - no transport,
          just long miles fuelled by a love for dogs. I've now expanded to cover
          more ground than ever, now offering a variety of services with a lot
          of experience working with different breeds, from pugs and
          pomeranians, to mastiffs and bulldogs..
        </p>
        <p>
          I have completed the Dog Training Certification @
          dogtrainingcollege.co.uk and since handled pets, gun dogs, and
          personal protection dogs; working alongside trainers with decades in
          the game.
        </p>
        <img src={dtcImg} className="ll-image" alt="a"></img>
      </div>
      <div className="content-section-2">
        <h1>Services</h1>
        <h3>Loose Leads is more than just walks..</h3>

        <p>
          we provide a variety of services for you and your pets Boofers ruff
          doggorino vvv big ol, doggo borkf. Noodle horse length including:
          transport, group walks, solo walks, training and advice, and pet
          sitting boy super chub blop, most angery pupper I have ever seen doge
          you are doin me a concern porgo, super chub boof. Woofer pats doge
          heck, wow very biscit.
        </p>
        <img src={tdogImg} className="ll-image" alt="a"></img>

        <center>
          <div className="row">
            {services.map((service) => (
              <SmallButtonComp
                key={service.id}
                text={service.str}
                func={() => handleClickService(service.id)}
                selected={service.id === serviceId}
              />
            ))}
          </div>

          <div id="desc">
            <ParagraphComp text={serviceDesc} />
          </div>
        </center>
      </div>
      <div className="content-section"></div>
    </div>
  );
}

export default LandingPage;
