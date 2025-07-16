// Write a function to check if a number is prime
// https://www.programiz.com/online-compiler/2RcYpAzyMC6Lh

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(`Is a prime number?`, isPrime(7));
