import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAllLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [allLights, setAllLights] = useState(initialAllLights);

  function handleToggle(id) {
    setAllLights(
      allLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }
  function handleTurnOn() {
    setAllLights(
      allLights.map((light) => ({
        ...light,
        isOn: true,
      }))
    );
  }
  function handleTurnOff() {
    setAllLights(
      allLights.map((light) => ({
        ...light,
        isOn: false,
      }))
    );
  }
  const disabled = allLights.every((light) => !light.isOn) ? true : false;

  const isOnList = allLights.map((light) => (light.isOn ? 1 : 0));
  const isOnSum = isOnList.reduce((a, b) => a + b);

  return (
    <Layout isDimmed={disabled}>
      <GlobalStyle />
      <Component
        {...pageProps}
        disabled={disabled}
        allLights={allLights}
        handleToggle={handleToggle}
        isOnSum={isOnSum}
        handleTurnOn={handleTurnOn}
        handleTurnOff={handleTurnOff}
      />
    </Layout>
  );
}
