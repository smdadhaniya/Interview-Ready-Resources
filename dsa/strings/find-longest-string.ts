// Write a function to  find the longest common prefix string amongst an array of strings.
// https://www.programiz.com/online-compiler/2xlw4DsKYrGa6
// https://www.programiz.com/online-compiler/4zEdbsttx2hkT

const strings = ["cars", "carom"];

const longestCommonPrefix = (strings) => {
  let prefix = strings[0];

  for (let string of strings) {
    let i = 0;
    for (; i < prefix.length; i++) {
      if (prefix[i] == string[i]) continue;
      else break;
    }
    prefix = prefix.substring(0, i);
  }
  return prefix;
};

console.log(`Longest common prefix: ${longestCommonPrefix(strings)}`);
