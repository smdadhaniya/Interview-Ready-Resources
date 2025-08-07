// Function to find the third largest element in an array.
// Output: Third largest element is: 7
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8];

const findThirdLargestElement = (array) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = current;
    } else if (current > secondLargest && current !== largest) {
      thirdLargest = secondLargest;
      secondLargest = current;
    } else if (
      current > thirdLargest &&
      current !== secondLargest &&
      current !== largest
    ) {
      thirdLargest = current;
    }
  }

  return thirdLargest;
};

console.log(`Third largest element is: ${findThirdLargestElement(numbers)}`);
