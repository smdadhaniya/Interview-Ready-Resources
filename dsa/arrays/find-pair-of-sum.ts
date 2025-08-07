// Write an function to return pair of sum given an array
// Solution: https://www.programiz.com/online-compiler/0DnZfJTzz0UIW

// | Iteration (i) | current | complement (`117 - current`) | `seen` before check                   | `complement in seen?`  | Action Taken          |
// | ------------- | ------- | ---------------------------- | ------------------------------------- | ---------------------- | --------------------- |
// | 0             | 10      | 107                          | `{}`                                  | ❌ No                   | Add `10: 0` to `seen` |
// | 1             | 63      | 54                           | `{10: 0}`                             | ❌ No                   | Add `63: 1` to `seen` |
// | 2             | 84      | 33                           | `{10: 0, 63: 1}`                      | ❌ No                   | Add `84: 2` to `seen` |
// | 3             | 92      | 25                           | `{10: 0, 63: 1, 84: 2}`               | ❌ No                   | Add `92: 3` to `seen` |
// | 4             | 62      | 55                           | `{10: 0, 63: 1, 84: 2, 92: 3}`        | ❌ No                   | Add `62: 4` to `seen` |
// | 5             | 54      | 63                           | `{10: 0, 63: 1, 84: 2, 92: 3, 62: 4}` | ✅ **Yes** (at index 1) | **Return \[1, 5]** ✔️ |

const numbers = [10, 63, 84, 92, 62, 54, 36];
const sumNum = 117;

const findThePairWithSumAndIndexes = () => {
  const seen = {}; // Stores number as key and its index as value

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const complement = sumNum - current;

    // Check if the complement has already been seen
    if (seen[complement] !== undefined) {
      // Found a pair: return their indices
      return [seen[complement], i];
    }

    // Store the current number and its index
    seen[current] = i;
  }

  // If no pair is found
  return [];
};

const result = findThePairWithSumAndIndexes();

if (result.length) {
  console.log(
    `Found a pair at indices ${result[0]} and ${result[1]}: (${
      numbers[result[0]]
    } + ${numbers[result[1]]}) = ${sumNum}`
  );
} else {
  console.log(`No pair found that sums to ${sumNum}`);
}
