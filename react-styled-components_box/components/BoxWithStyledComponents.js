import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.$isBlack === "black" ? "black" : "green"};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

/* export default function BoxWithStyledComponents({ $isBlack }) {
  return (
    <div>
      <StyledBox $isBlack={$isBlack}></StyledBox>
    </div>
  );
}
 */
