import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me!</Button>
      <Button>Touch Me!</Button>
      <Button>Have a look!</Button>
      <Button>Press Me!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
