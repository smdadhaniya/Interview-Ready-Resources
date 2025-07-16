// Write an function to find the second largest element in an array.
// Output: Second largest element is: 8

const numbersArray = [1, 3, 5, 7, 9, 2, 4, 6, 8];

const secondLargest = (numbers) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength; i++) {
    if (numbers[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = numbers[i];
    } else if (numbers[i] < firstLargest && numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }

  return secondLargest;
};

console.log(`Second largest element is: ${secondLargest(numbersArray)}`);
