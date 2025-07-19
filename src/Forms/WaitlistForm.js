import "../components/components.css";
import "./forms.css";

import TransportForm from "../Forms/TransportForm";
import WalksForm from "./WalksForm";

function WaitlistForm(props) {
  const shownForm = props.shownForm;

  if (shownForm) {
    return <WalksForm />;
  } else {
    return <TransportForm />;
  }
}

export default WaitlistForm;
