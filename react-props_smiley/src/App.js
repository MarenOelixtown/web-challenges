import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley />
      <Smiley isHappy />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "🤣" : "😒"}</h1>;
}
