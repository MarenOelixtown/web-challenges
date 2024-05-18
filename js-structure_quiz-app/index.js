// Store the cards in a global state
import { cards } from "./utils/Cards.js";
import Header from "./components/Header/Header.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import Card from "./components/Card/Card.js";
import CardList from "./components/CardList/CardList.js";
import { handleFormSubmit } from "./components/Form/HandleFormSubmit.js";
import Form from "./components/Form/Form.js";
import App from "./components/App/App.js";

/* const headerElement = Header(); */

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
