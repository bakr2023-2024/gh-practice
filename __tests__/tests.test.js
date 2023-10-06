const {
  capitalize,
  reverseString,
  calculator,
  caesar,
  analyzeArray,
} = require("../functions");
test("racECAR -> Racecar", () => {
  expect(capitalize("racECAR")).toBe("Racecar");
});
test("ambola -> alobma", () => {
  expect(reverseString("ambola")).toBe("alobma");
});
test("add(1,2) => 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("sub(1,2) => -1", () => {
  expect(calculator.sub(1, 2)).toBe(-1);
});
test("mul(1,2) => 2", () => {
  expect(calculator.mul(1, 2)).toBe(2);
});
test("div(2,1) => 2", () => {
  expect(calculator.div(2, 1)).toBe(2);
});
test("If he had anything => Pm ol ohk hufaopun", () => {
  expect(caesar("If he had anything", 7)).toBe("Pm ol ohk hufaopun");
});
test("[1,8,3,4,2,6] => object == {average: 4, min: 1, max: 8, length: 6};", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
