// Write an function that takes a  numbers whether they are odd or even.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const classifyOddEven = () => {
  const length = numbers.length;
  const even = [];
  const odd = [];

  for (let i = 0; i < length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return {
    even,
    odd,
  };
};

const res = classifyOddEven();
console.log("Odd numbers are:", res.odd);
console.log("Even numbers are:", res.even);
