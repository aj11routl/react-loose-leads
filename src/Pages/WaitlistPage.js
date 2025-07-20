import { useState, useEffect, useRef } from "react";

import HeaderComp from "../components/HeaderComp";
import WaitlistForm from "../Forms/WaitlistForm";
import SmallButtonComp from "../components/SmallButtonComp";
import WaveShapeComp from "../components/WaveShapeComp";

function WaitlistPage() {
  // true for waitlist form, false for transport form
  const [shownForm, setShownForm] = useState(true);

  return (
    <div>
      <HeaderComp />
      <div>
        <div>
          <div className="content-section">
            <div className="content">
              <h1>Waitlist</h1>
              <h3>Fill out one of the forms and we'll be in touch soon!</h3>
              <p>
                Doggo ipsum doggo very good spot pats very good spot I am bekom
                fat yapper maximum borkdrive, heckin good boys and girls smol
                borking doggo with a long snoot for pats pats boof. Adorable
                doggo borkf aqua doggo, tungg.
              </p>
              <row>
                <SmallButtonComp
                  text="Walks & Pet sitting"
                  selected={shownForm}
                  func={() => {
                    setShownForm(true);
                  }}
                />
                <SmallButtonComp
                  text="Transport"
                  selected={!shownForm}
                  func={() => {
                    setShownForm(false);
                  }}
                />
              </row>
            </div>
          </div>
        </div>

        <div className="content-section-2">
          <div className="content">
            <WaitlistForm shownForm={shownForm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistPage;
