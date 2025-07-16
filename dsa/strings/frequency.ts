// Write an function to count frequency of characters in a string.
// Solution: https://www.programiz.com/online-compiler/7dI59BeQOhydb

const countFrequency = (string = "") => {
  if (string.length === 0) {
    return {};
  }

  const frequency = string.split(" ").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return frequency;
};

console.log(
  `Frequency of characters:`,
  countFrequency("the quick brown fox jumps over the lazy dog")
);
