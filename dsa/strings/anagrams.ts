// Write an function to check where to string is anagrams or not
// Solution: https://www.programiz.com/online-compiler/0Wa7CTF7o3LEv

const str1 = "save";
const str2 = "vase";

const areAnagrams = (str1 = "", str2 = "") => {
  if (!str1.length || !str2.length) return false;
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
console.log(`${str1} and ${str2} are anagrams: ${areAnagrams(str1, str2)}`);
