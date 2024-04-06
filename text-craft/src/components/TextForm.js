import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [darkMode, setDarkMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleDarkMode = () => {
    if (darkMode.color == 'white'){
    setDarkMode({
      color: "black",
      backgroundColor: "white",
    });
    setBtnText("Enable Dark Mode")
  }
  else{
    setDarkMode({
      color: "white",
      backgroundColor: "black",
    });
    setBtnText("Enable Light Mode")
  }
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container my-3" style = {darkMode}>
      <div class="form-group" style = {darkMode}>
        <h2 for="comment">Enter Your Text Below:</h2>
        <textarea
          class="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
          id="textArea"
          placeholder="Enter You Text Here"
          style = {darkMode}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={toUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={toLowerCase}>
          Convert to toLowerCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={copyText}>
          Copy Text
        </button>
      </div>
      <div className="container my-3 ">
        <h3>Word Count = {text.split(" ").length}</h3>
        <h3>Character Count = {text.length}</h3>
      </div>
      <button className="btn btn-primary" onClick={toggleDarkMode}>
      {btnText}
      
      </button>
    </div>
  );
}
