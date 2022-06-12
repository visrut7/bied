import { shiftRight, shiftLeft } from "./shift-bits";

test("Right shift", () => {
  expect(shiftRight(["0", "0", "1", "1"])).toStrictEqual(["0", "0", "0", "1"]);
  expect(shiftRight(["1", "0", "1", "1"])).toStrictEqual(["0", "1", "0", "1"]);
});

test("Left shift", () => {
  expect(shiftLeft(["1", "0", "1", "1"])).toStrictEqual(["0", "1", "1", "0"]);
  expect(shiftLeft(["1", "1", "1", "1"])).toStrictEqual(["1", "1", "1", "0"]);
});
