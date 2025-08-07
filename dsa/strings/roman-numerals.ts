// Write an function to find the roman numerals for a given number.

// https://www.programiz.com/online-compiler/5kBbnIQi3AhwS

const romanNumerals = (num: number) => {
  // Step 1: Mapping Roman symbols to their values
  const roman: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Step 2: Initialize result string to build Roman numeral
  let result = "";

  // Step 3: Iterate through each key in the roman object
  for (let key in roman) {
    console.log(
      `Checking symbol: ${key} (value: ${roman[key]}) against number: ${num}`
    );

    // Step 4: While current number is greater than or equal to the Roman value
    while (num >= roman[key]) {
      console.log(`  - ${num} >= ${roman[key]}: Add '${key}' to result`);
      result += key;
      num -= roman[key];
      console.log(
        `  - Subtracted ${roman[key]}, new num: ${num}, result so far: '${result}'`
      );
    }
  }

  // Step 5: Return the final Roman numeral result
  return result;
};

// Step 6: Call the function and print the final result
console.log(`Roman numerals for 24: ${romanNumerals(24)}`);
