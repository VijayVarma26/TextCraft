import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const copyText = () => {};
  navigator.clipboard.writeText(text)
  return (
    <>
      <div class="form-group">
        <h2 for="comment">Enter Your Text Below:</h2>
        <textarea
          class="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
          id="textArea"
          placeholder="Enter You Text Here"
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
    </>
  );
}
