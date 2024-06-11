import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleTurnOn,
  handleTurnOff,
  disabled,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={disabled}
        type="button"
        onClick={() => {
          handleTurnOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={!disabled}
        type="button"
        onClick={() => {
          handleTurnOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
