import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

const onClick = jest.fn();

test("renders player information and two buttons", () => {
  render(
    <Player
      name="John"
      score="2"
      onDecreasePlayerScore={onClick}
      onIncreasePlayerScore={onClick}
    />
  );
  const playerName = screen.getByText(/John/i);
  const playerScore = screen.getByText(/2/i);
  const buttons = screen.getAllByRole("button");
  expect(playerName).toBeInTheDocument();
  expect(playerScore).toBeInTheDocument();
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  render(
    <Player
      name="John"
      score="2"
      onDecreasePlayerScore={onClick}
      onIncreasePlayerScore={onClick}
    />
  );

  const user = userEvent.setup();
  const onDecreaseButton = screen.getByRole("button", {
    name: /Decrease Score/i,
  });
  await user.click(onDecreaseButton);
  const onIncreaseButton = screen.getByRole("button", {
    name: /Increase Score/i,
  });
  await user.click(onIncreaseButton);
});
