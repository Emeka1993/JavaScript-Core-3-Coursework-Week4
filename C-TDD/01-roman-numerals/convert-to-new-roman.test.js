test("returns IV if passed 4 as an argument", function () {

  let number = 4;
  let expected = "IV";
  
  let result = convertToNewRoman(number);
  
  expect(result).toEqual(expected);
});