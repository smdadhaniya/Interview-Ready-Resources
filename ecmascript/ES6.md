### **ES6 (ES2015)**

ES6 was a major update that introduced many foundational features for modern JavaScript development.

1. **`let` and `const`**  
   Block-scoped variable declarations.

   ```javascript
   let x = 10;
   const y = 20;
   ```

2. **Arrow Functions**  
   Shorter syntax for functions and lexical `this`.

   ```javascript
   const add = (a, b) => a + b;
   ```

3. **Template Literals**  
   String interpolation and multi-line strings.

   ```javascript
   const name = "Alice";
   console.log(`Hello, ${name}!`);
   ```

4. **Destructuring Assignment**  
   Extract values from arrays or objects.

   ```javascript
   const [a, b] = [1, 2];
   const { name, age } = { name: "Alice", age: 25 };
   ```

5. **Default Parameters**  
   Set default values for function parameters.

   ```javascript
   function greet(name = "Guest") {
     console.log(`Hello, ${name}!`);
   }
   ```

6. **Rest and Spread Operators**

   - Rest: Collect multiple arguments into an array.
   - Spread: Expand arrays or objects.

   ```javascript
   function sum(...numbers) {
     return numbers.reduce((acc, num) => acc + num, 0);
   }
   const arr = [1, 2, 3];
   const newArr = [...arr, 4, 5];
   ```

7. **Classes**  
   Syntactic sugar for prototype-based inheritance.

   ```javascript
   class Person {
     constructor(name) {
       this.name = name;
     }
     greet() {
       console.log(`Hello, ${this.name}!`);
     }
   }
   ```

8. **Modules (`import`/`export`)**  
   Modularize code using `import` and `export`.

   ```javascript
   // math.js
   export const add = (a, b) => a + b;

   // app.js
   import { add } from "./math.js";
   ```

9. **Promises**  
   Handle asynchronous operations.

   ```javascript
   const promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve("Done!"), 1000);
   });
   promise.then((result) => console.log(result));
   ```

10. **Enhanced Object Literals**  
    Shorthand syntax for object properties and methods.
    ```javascript
    const name = "Alice";
    const obj = {
      name,
      greet() {
        console.log(`Hello, ${this.name}!`);
      },
    };
    ```

---
