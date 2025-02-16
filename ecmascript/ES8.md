### **ES8 (ES2017)**

1. **`async`/`await`**  
   Simplify asynchronous code.

   ```javascript
   async function fetchData() {
     const response = await fetch("https://api.example.com");
     const data = await response.json();
     console.log(data);
   }
   ```

2. **`Object.values()` and `Object.entries()`**  
   Get values or key-value pairs from an object.

   ```javascript
   const obj = { a: 1, b: 2 };
   console.log(Object.values(obj)); // [1, 2]
   console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
   ```

3. **Trailing Commas in Function Parameters**  
   Allow trailing commas in function parameter lists.
   ```javascript
   function foo(a, b) {
     console.log(a, b);
   }
   ```

---
