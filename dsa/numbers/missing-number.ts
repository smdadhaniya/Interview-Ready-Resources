// Write an function to find the missing numbers among  the numbers in an array.
//https://www.programiz.com/online-compiler/8BWi9dI3aFClj

//  Solve Description: The sum of natural numbers from 1 to N is given by the formula: N * (N + 1) / 2.

// Formula : N * (N + 1) / 2

const findMissingNumber = (arr) => {
  const n = arr.length; // Assuming the array contains n numbers from a sequence of 0 to n
  const expectedSum = (n * (n + 1)) / 2;
  console.log("Expected sum:", expectedSum);
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  console.log("Actual sum:", actualSum);
  return expectedSum - actualSum;
};

console.log(
  `Missing number is: ${findMissingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9])}`
);
