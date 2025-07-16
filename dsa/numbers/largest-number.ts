// Write an function to find the first largest element in an array.
// Output: 9

const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8];

const firstLargest = () => {
  let largest = -Infinity; // Initialize to the smallest possible number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
};

console.log(`The first largest element is: ${firstLargest()}`);
