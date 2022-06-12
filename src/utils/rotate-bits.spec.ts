import { rotateLeft, rotateRight } from "./rotate-bits";

test("Rotate left", () => {
  expect(rotateLeft(["1", "0", "1"])).toStrictEqual(["0", "1", "1"]);
  expect(rotateLeft(["1", "1", "1"])).toStrictEqual(["1", "1", "1"]);
});

test("Rotate right", () => {
  expect(rotateRight(["1", "0", "1"])).toStrictEqual(["1", "1", "0"]);
  expect(rotateRight(["1", "1", "1"])).toStrictEqual(["1", "1", "1"]);
});
