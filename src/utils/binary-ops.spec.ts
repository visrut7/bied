import { xor, or, and } from "./binary-ops";

test("xor", () => {
  expect(
    xor([
      ["1", "1"],
      ["0", "1"],
    ])
  ).toStrictEqual(["1", "0"]);

  expect(
    xor([
      ["1", "1", "1", "1"],
      ["0", "0", "1", "1"],
      ["0", "0", "0", "1"],
    ])
  ).toStrictEqual(["1", "1", "0", "1"]);
});

test("or", () => {
  expect(
    or([
      ["1", "1"],
      ["0", "1"],
    ])
  ).toStrictEqual(["1", "1"]);

  expect(
    or([
      ["1", "0", "1", "1"],
      ["0", "0", "1", "1"],
      ["0", "0", "0", "1"],
    ])
  ).toStrictEqual(["1", "0", "1", "1"]);
});

test("and", () => {
  expect(
    and([
      ["1", "1"],
      ["0", "1"],
    ])
  ).toStrictEqual(["0", "1"]);

  expect(
    and([
      ["1", "0", "1", "1"],
      ["0", "0", "1", "1"],
      ["0", "0", "0", "1"],
    ])
  ).toStrictEqual(["0", "0", "0", "1"]);
});
