// Write an function to find the largest element in an array.
// Output: Largest element is: 7
const nums = [1, 3, 5, 7, 9, 2, 4, 6, 8];

const thirdLargest = (numbers) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength; i++) {
    if (numbers[i] > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest = numbers[i];
    } else if (numbers[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = numbers[i];
    } else if (numbers[i] > thirdLargest) {
      thirdLargest = numbers[i];
    }
  }

  return thirdLargest;
};

console.log(`Third largest element is: ${thirdLargest(nums)}`);
