// Write an function to find the majority element in an array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).
// Output: Majority element is: 4

// https://www.programiz.com/online-compiler/76VApgpgPoNhI

const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement = (array) => {
  let count = 1;
  let element = array[0];
  for (let index = 1; index < array.length; index++) {
    if (element === array[index]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      element = array[index];
      count = 1;
    }
  }
  return element;
};

console.log(`Majority element is: ${majorityElement(array)}`);
