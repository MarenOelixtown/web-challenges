import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

const onInputChange = jest.fn();
test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      name="Football"
      value="Football"
      onChange={onInputChange}
      required={true}
    />
  );

  const input = screen.getByLabelText(/Name of game/i);

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("id", "Football");
  expect(input).toHaveAttribute("name", "Football");
  expect(input).toHaveAttribute("placeholder", "e.g. Dodelido");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("value", "Football");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      name="Football"
      value=""
      onChange={onInputChange}
      required={true}
    />
  );

  const inputGame = screen.getByLabelText(/Name of game/i);

  await user.type(inputGame, "Football");
  expect(onInputChange).toHaveBeenCalledTimes(8);
});
