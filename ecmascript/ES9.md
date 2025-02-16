### **ES9 (ES2018)**

1. **Asynchronous Iteration (`for-await-of`)**  
   Iterate over asynchronous data.

   ```javascript
   async function process(array) {
     for await (const item of array) {
       console.log(item);
     }
   }
   ```

2. **Rest/Spread Properties for Objects**  
   Use rest/spread operators with objects.

   ```javascript
   const obj = { a: 1, b: 2 };
   const { a, ...rest } = obj;
   const newObj = { ...obj, c: 3 };
   ```

3. **Promise.prototype.finally**  
   Execute code after a promise settles (resolves or rejects).
   ```javascript
   promise
     .then((result) => console.log(result))
     .catch((error) => console.error(error))
     .finally(() => console.log("Done!"));
   ```

---
