// Write an function to Fibonacci series up to n terms

const Fibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};
// Test the function
console.log(Fibonacci(10));
