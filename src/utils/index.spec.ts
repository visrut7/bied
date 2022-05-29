import { getRawBytes, isNumber, getDecimal } from "./index";

test("padding function", () => {
  expect(getRawBytes(15, 5, "0")).toStrictEqual(["0", "1", "1", "1", "1"]);
});

test("isNumber function", () => {
  expect(isNumber("asi")).toStrictEqual(false);
  expect(isNumber("1032.")).toStrictEqual(false);
  expect(isNumber("1434")).toStrictEqual(true);
});

test("getDecimal function", () => {
  expect(getDecimal(["1", "0", "1", "0"])).toStrictEqual(10);
  expect(getDecimal(["0", "1", "0"])).toStrictEqual(2);
  expect(getDecimal(["1", "1", "1"])).toStrictEqual(7);
});
