import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Hello World!</h2>
      <label htmlFor="input-test">This is a test-input: </label>
      <input type="text" id="input-test"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/Hamburg">
        Do you want to know more about Hamburg?
      </a>
    </article>
  );
}
