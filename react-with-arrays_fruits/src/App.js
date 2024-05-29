import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 130,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 131,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 132,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 133,
      name: "🍍 Pineapple",
      color: "yellow",
    },
    {
      id: 134,
      name: "🍉 Melon",
      color: "red",
    },
  ];
  console.log(fruits);

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} color={color} name={name} />
      ))}
    </div>
  );
}
