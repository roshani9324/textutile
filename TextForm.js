import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setText("You have clicked on handle UP click" + text);
    let newText = text.toUpperCase();
    props.showAlert("Converted to Uppercase!", "success");

    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    setText("You have clicked on handle Lo click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");

  };

  const handleCLclick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Clear all text !", "success");
    

  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("All text are copy!", "success");

  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
        props.showAlert("Remove extra space!", "success");

  };

  const handleOnChange = (event) => {
    console.log(" On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text here"); //Use-state function

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCLclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove extra space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length}character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2> Preview</h2>
        <p> {text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
