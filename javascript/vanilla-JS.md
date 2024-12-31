### HTML Interview Questions:

**1. What is the difference between `<ul>`, `<ol>`, and `<li>` in HTML?**

- **Answer**:
  - `<ul>` defines an unordered list, where list items are displayed with bullets.
  - `<ol>` defines an ordered list, where list items are displayed with numbers or letters.
  - `<li>` defines a list item, and can be used inside both `<ul>` and `<ol>`.

**2. What is the use of the `<meta>` tag in HTML?**

- **Answer**:
  - The `<meta>` tag provides metadata about the HTML document. It can specify the character encoding (`<meta charset="UTF-8">`), author of the document, viewport settings for mobile responsiveness, and much more. It's crucial for SEO and improving the user experience.

**3. Explain the difference between the `<head>` and `<body>` sections of an HTML document.**

- **Answer**:
  - The `<head>` section contains metadata about the document, such as title, links to CSS files, and scripts. It is not displayed in the browser.
  - The `<body>` section contains the actual content of the page, including text, images, links, etc. This content is displayed in the browser.

**4. How would you embed a video in HTML?**

- **Answer**:
  - You can embed a video using the `<video>` tag. Example:
    ```html
    <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    ```
  - The `controls` attribute adds video controls (play, pause, volume).

---

### CSS Interview Questions:

**1. What are pseudo-classes in CSS?**

- **Answer**:
  - Pseudo-classes are used to define the special state of an element. They are prefixed with a colon `:`. Examples include:
    - `:hover`: Targets an element when it is hovered over.
    - `:active`: Targets an element when it is active.
    - `:focus`: Targets an element when it gains focus (e.g., input fields).
    - `:first-child`: Targets the first child of an element.

**2. How do you center a div both horizontally and vertically using CSS?**

- **Answer**:
  - You can center a div using flexbox:
    ```css
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    ```
  - Alternatively, you can use absolute positioning:
    ```css
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ```

**3. What is the difference between `em`, `rem`, and `px` units in CSS?**

- **Answer**:
  - `px` (pixels) is an absolute unit that defines a fixed size.
  - `em` is a relative unit that depends on the font size of the parent element. 1 `em` is equal to the current font size of the element.
  - `rem` (root em) is also a relative unit, but it is based on the font size of the root element (`<html>`), not the parent.

**4. What are `z-index` and stacking context in CSS?**

- **Answer**:
  - `z-index` is a CSS property that controls the stacking order of elements that overlap. Elements with a higher `z-index` are displayed above elements with a lower `z-index`.
  - Stacking context refers to the hierarchical layers of elements with `position` set to `relative`, `absolute`, or `fixed` and a non-auto `z-index`.

**5. What is the purpose of the `overflow` property in CSS?**

- **Answer**:
  - The `overflow` property controls what happens when content overflows an element's box. Common values include:
    - `visible`: Content is not clipped, and it overflows outside the element.
    - `hidden`: Content is clipped and not visible outside the element.
    - `scroll`: Content is clipped, but scrollbars are provided to view the content.
    - `auto`: Scrollbars are provided if the content overflows.

---

### JavaScript Interview Questions:

**1. What is the `setTimeout()` function in JavaScript?**

- **Answer**:
  - `setTimeout()` is a function that executes a piece of code after a specified delay. The syntax is:
    ```javascript
    setTimeout(function, delay);
    ```
  - For example:
    ```javascript
    setTimeout(function () {
      alert("Hello, World!");
    }, 2000); // Displays the alert after 2 seconds.
    ```

**2. What are JavaScript's data types?**

- **Answer**:
  - The main data types in JavaScript are:
    1. `String`
    2. `Number`
    3. `Boolean`
    4. `undefined`
    5. `null`
    6. `Object`
    7. `Symbol` (introduced in ES6)
    8. `BigInt` (introduced in ES11)

**3. Explain the concept of "hoisting" in JavaScript.**

- **Answer**:
  - Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope before code execution. However, only the declarations are hoisted, not the initializations.
    - Example:
      ```javascript
      console.log(x); // undefined
      var x = 5;
      ```
      The variable `x` is hoisted but initialized later, so its value is `undefined` at the time of the log.

**4. What is the purpose of the `bind()`, `call()`, and `apply()` methods in JavaScript?**

- **Answer**:
  - These are methods used to control the `this` context in JavaScript functions.
    - `call()`: Immediately invokes the function with the specified `this` context and arguments passed individually.
    - `apply()`: Similar to `call()`, but arguments are passed as an array or array-like object.
    - `bind()`: Returns a new function that, when called, has its `this` value set to the provided context, and the arguments are set at the time of invocation.

**5. What are promises and how do they work?**

- **Answer**:

  - A **promise** is an object representing the eventual completion or failure of an asynchronous operation. It has three states: `pending`, `resolved` (fulfilled), and `rejected`.
  - Promises are used to handle asynchronous code more effectively than traditional callback functions. They can be chained using `.then()` for success and `.catch()` for errors.

    ```javascript
    let promise = new Promise(function (resolve, reject) {
      let success = true;
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    });

    promise
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
    ```

**6. What is the event loop in JavaScript?**

- **Answer**:
  - The **event loop** is a mechanism that allows JavaScript to execute non-blocking asynchronous operations. It works by continually checking the call stack (where functions are executed) and the message queue (where asynchronous operations wait to be executed). When the call stack is empty, the event loop picks up functions from the message queue and executes them.

**7. Explain the difference between `null` and `undefined` in JavaScript.**

- **Answer**:
  - `null` is an assignment value representing the intentional absence of any object value. It is an object type.
  - `undefined` is a type itself and means a variable has been declared but not assigned any value.

**8. What is the difference between `forEach()`, `map()`, and `filter()` in JavaScript?**

- **Answer**:
  - `forEach()` iterates over an array, executing a function on each item, but it doesn't return anything (it returns `undefined`).
  - `map()` creates a new array populated with the results of calling a provided function on every element of the array.
  - `filter()` creates a new array with all elements that pass the test implemented by the provided function.

---

### More General JavaScript Interview Questions:

**1. What is the purpose of a callback function in JavaScript?**

- **Answer**:
  - A callback function is a function that is passed as an argument to another function and is executed after that function completes. Callbacks are used for asynchronous operations like handling user inputs or reading data from a file.

**2. How does JavaScript handle asynchronous code?**

- **Answer**:
  - JavaScript handles asynchronous code using **callbacks**, **Promises**, and **async/await** (ES6+). These methods allow JavaScript to perform non-blocking operations, such as fetching data from an API or reading files, without freezing the UI.

---
