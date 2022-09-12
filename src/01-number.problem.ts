import { expect, it } from "vitest";

export const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

//line to ignore ts
// @ts-ignore
addTwoNumbers("asdasdasd", []);

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
