let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  expect(getLargestNumber([3, 21, 88, 4, 36])).toEqual(88)
});