import { Link } from "react-router-dom";
import "./components.css";

function SmallButtonComp({ text = "Default text", func, selected = false }) {
  return (
    <button
      // if button is selected, set className to 'small-button-selected', else is 'small-button'
      className={"small-button" + (selected ? "-selected" : "")}
      onClick={func}
    >
      {text}
    </button>
  );
}

export default SmallButtonComp;
