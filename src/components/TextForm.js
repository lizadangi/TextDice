import React, { useState } from "react";

export default function TextForm(props) {
  const HandleUpClick = () => {
    //console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const HandleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const HandleRemoveText = () => {
    setText("");
    props.showAlert("Remove text", "success");
  };

  const handleonchange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={HandleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={HandleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={HandleRemoveText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and{text.length} Character
        </p>
        <p>{0.008 * text.split("").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox about to preview it here"}
        </p>
      </div>
    </>
  );
}
