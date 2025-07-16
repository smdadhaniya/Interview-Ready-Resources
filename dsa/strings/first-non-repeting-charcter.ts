// Write an function to find first non-repeating character in a string

const findFirstNonRepeatingCharacter = (str = "") => {
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (str.indexOf(element) === str.lastIndexOf(element)) {
      return element;
    }
  }
  return null;
};

console.log(
  `The first non-repeating character is: ${findFirstNonRepeatingCharacter(
    "swiss"
  )}`
);
