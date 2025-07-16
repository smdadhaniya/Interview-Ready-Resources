// Write an function to reverse string without using built in method from javascript
// Output: String is reversed: segnellahc ASD s'yad 03 tpircsavaj ot emocleW

const stringText = "Welcome to javascript 30 day's DSA challenges";

const reverseString = (text = "") => {
  let reverseText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  return reverseText;
};

console.log(`String is reversed: ${reverseString(stringText)}`);
