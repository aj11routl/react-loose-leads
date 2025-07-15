import "./components.css";

function ParagraphComp({ text = "Default paragraph comp text" }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default ParagraphComp;
