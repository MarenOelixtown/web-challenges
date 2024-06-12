import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ handleToggle, light }) {
  /* const [isOn, setIsOn] = useState(false); */

  /* function handleToggle() {
    setIsOn((isOn) => !isOn);
  } */

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(light.id);
      }}
      $isOn={light.isOn}
    >
      <Icon $isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
