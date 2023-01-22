import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    console.log("onChange()");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#050505",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1 my-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1 my-1`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1 my-1`}
          onClick={handleClClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "dark"
          } mx-1 my-1`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Text Summary</h2>
        <p>
          {/* {text ? text.split(" ").filter((el)=>{return el.length!==0}).length : 0} words and {text.length} */}
          {text ? text.trim().split(/\s+/).length : 0} words and {text.length}
          characters
        </p>
        <p>
          {0.008 * (text ? text.trim().split(/\s+/).length : 0)} Minutes Read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something Above To Preview It Here..."}
        </p>
      </div>
    </>
  );
}
