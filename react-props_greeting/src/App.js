import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Everybody" />
      <Greeting name="Pete" />
      <Greeting />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Pete" ? "Coach" : name}!</h1>;
}
