// Write an function to find the missing missing ranges of numbers in an array.

// Output: [[2,2],[4,49],[51,74],[76,99]]

const numbers = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

const findMissingRanges = (numbers, lower, upper) => {
  const missingElementRanges: any = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i];
    const next = numbers[i + 1];
    if (current + 1 <= next) {
      missingElementRanges.push([current + 1, next - 1]);
    }
  }
  if (numbers[numbers.length - 1] < upper) {
    missingElementRanges.push([numbers[numbers.length - 1] + 1, upper]);
  }
  return missingElementRanges;
};

console.log(`Missing ranges are: ${findMissingRanges(numbers, lower, upper)}`);
