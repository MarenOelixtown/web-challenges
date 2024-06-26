import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns 5 if called with the arbument (2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("add() returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});
test("add() returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});
test("subtract() returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("subtract() returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});
test("multiply() returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("multiply() returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("multiply() returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("multiply() returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBe(8);
});
test("divide() returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("divide() returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
