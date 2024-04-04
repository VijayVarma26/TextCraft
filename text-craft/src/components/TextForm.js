import React, { useState } from "react";

export default function TextForm() {
    const [text, setText] = useState();

    const onChange = () =>{

    }
    const toUpperCase = () =>{

    }

    const toLowerCase = () =>{

    }


  return (
    <>
      <div class="form-group">
        <h2 for="comment">Enter Your Text Below:</h2>
        <textarea class="form-control" rows="8" id="textArea" placeholder="Enter You Text Here"></textarea>
        <button className="btn btn-primary my-3" >Convert to UpperCase</button>
      </div>
    </>
  );
} 
