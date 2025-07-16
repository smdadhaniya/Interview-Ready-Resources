// Write an function to count the number of vowels in a given string.

const countVowels = (string) => {
  const vowels = "aeiouAEIOU";

  let count = 0;
  for (let vowel of string) {
    let caseSensitive = vowel.toLowerCase();
    if (vowel.trim() && vowels.includes(caseSensitive)) {
      count++;
    }
  }
  return count;
};

console.log(`Number of vowels in the string: ${countVowels("Hello World!")}`);
