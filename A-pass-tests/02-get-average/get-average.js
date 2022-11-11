// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let answer = numbers.filter((element) => typeof element === "number");
    
    console.log(answer);

    let average = answer.reduce((a, b) => a + b) / answer.length;
    return average;
  }

module.exports = average;
