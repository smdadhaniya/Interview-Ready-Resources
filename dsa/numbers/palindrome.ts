// Write an function to check if a given string is a palindrome.

const isPalindrome = (string) => {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

const text = "madam";
console.log(`Is "${text}" a palindrome?`, isPalindrome(text));
