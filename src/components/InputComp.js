import { Link } from "react-router-dom";
import { useState } from "react";

function InputComp() {
  const profiles = [1, 2, 3];

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  console.log("state: " + input);

  return (
    <div>
      <input name="MyInput" onChange={handleChange}></input>
      <Link to={"/profiles/" + input}>
        <button></button>
      </Link>
    </div>
  );
}

export default InputComp;
