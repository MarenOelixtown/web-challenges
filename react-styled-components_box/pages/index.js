import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const BoxWrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <BoxWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack="black" />
    </BoxWrapper>
  );
}
