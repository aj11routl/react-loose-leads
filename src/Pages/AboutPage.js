import tdawg from "../images/trans-doggy.png";

import HeaderComp from "../components/HeaderComp";

function AboutPage() {
  return (
    <div className="App">
      <HeaderComp page={3} />

      <div className="about-content-1">
        <img src={tdawg} className="ll-image" alt="a"></img>
      </div>
    </div>
  );
}

export default AboutPage;
