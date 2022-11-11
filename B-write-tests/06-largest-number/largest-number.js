let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  
  const numbers = [3, 21, 88, 4, 36];
  const expectedResult = 88;
 
  const receivedResult = getLargestNumber(numbers);

  expect(receivedResult).toEqual(expectedResult);
  expect(numbers).toEqual([3, 21, 88, 4, 36]);



});

module.exports = getLargestNumber;
