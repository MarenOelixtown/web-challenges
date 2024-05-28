import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <Button
      text="Click Me"
      color="white"
      backgroundColor="blue"
      disabled={false}
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, backgroundColor, text, onClick }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        height: "80px",
      }}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
