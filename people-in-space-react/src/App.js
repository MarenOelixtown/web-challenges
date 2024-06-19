import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [astronauts, setAstronauts] = useState(0);

  const url = "http://api.open-notify.org/astros.json";
  useEffect(() => {
    async function fetchPeopleInSpaceData() {
      const response = await fetch(url);
      const dataSpace = await response.json();
      console.log(dataSpace);
      setAstronauts(dataSpace.number);
    }
    fetchPeopleInSpaceData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 People in Space 🚀</h1>
        <p>
          We are tracking {astronauts} astronauts between Mars, Jupiter and
          Earth.
        </p>
      </header>
    </div>
  );
}

export default App;
