# Javascript

## What is Javascript?

* JavaScript is a high-level, versatile programming language primarily used to create dynamic and interactive content on websites. 

* It is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript allows developers to build responsive and user-friendly web applications.

## Key Features of JavaScript

* Interactivity: Enables elements like dropdowns, form validation, sliders, and more.

* Dynamic Updates: Allows content on a webpage to update in real-time without requiring a page refresh (via AJAX or Fetch API).

* Event Handling: Responds to user actions such as clicks, mouse movements, or keyboard inputs.

* Cross-Platform: Runs on any browser with a JavaScript engine, making it platform-independent

* Extensibility: Works well with APIs, databases, and frameworks.

## Common Uses of JavaScript

* Front-end Development: Manipulates HTML and CSS to make web pages dynamic.

* Back-end Development: Through environments like Node.js, JavaScript can be used to build servers and handle server-side logic.

* Mobile App Development: Frameworks like React Native enable JavaScript to create mobile apps.

* Game Development: Used for browser-based games.

* Automation and Scripting: Simplifies tasks and processes.

## variables in JS 

* var : was traditional way of declaring variables in JavaScript. When we use var keyword to declare the variable we can able to redeclare it in the function

* let : was keyword to declare variables. When we use let keyword to declare the variable we able to re assign the value. we cant able re declare it

* const : was keyword to declare variables .when we use const keyword to declare the variable we cant able to re declare or re assign it 

## Functions

functions are reusable blocks of code designed to perform specific tasks. They are fundamental to organizing and structuring code and are widely used for modularity, readability, and efficiency.

## Types of Functions in JavaScript

* Normal Function : Defined using the function keyword. These functions are hoisted, meaning they can be called before their definition in the code.

* Arrow Functions : A concise syntax introduced in ES6. They do not have their own this context and are often used for shorter functions.

## Normal Funtions vs Arrow Functions

* Normal Functions
  - Normal functions are traditional way implement function
  - Uses the function keyword to define a function.
  - Syntax can include a name or be anonymous.
  - The value of this inside a regular function depends on how the function is called.
  - Regular functions can be used as constructors with the new keyword.
  - Regular functions have access to the arguments object, which is an array-like object containing all the arguments passed to the function.
  - In regular functions, you must explicitly use the return statement to return a value.

* Arrow Functions
  - Uses the arrow (=>) syntax
  - More concise, especially for small functions
  - Arrow functions do not have their own this. They inherit this from the surrounding lexical scope (i.e., the context where they are defined).
  - Arrow functions cannot be used as constructors. Attempting to use new with an arrow function results in an error.
  - Arrow functions do not have their own arguments object. They inherit it from their enclosing scope.
  - Arrow functions have an implicit return for single expressions. If the function consists of only one expression, return is implicit.

## What is hoisting in JavaScript?

* JavaScript is a behavior in which a function or a variable can be used before declaration. 

* This process allows you to use variables and call functions before they are actually declared in the code

## What is a closure in JavaScript?

This means that inner functions can access variables from their outer function even after the outer function has finished executing.

## What is the difference between null and undefined?

* undefined : undefined means a variable has been declared but has not yet been assigned a value

* null is an assignment value, meaning that a variable has been declared and given the value of null.

##  What is the difference between synchronous and asynchronous execution?

* Synchronous: Operations are executed one after another, blocking further code execution until the current operation completes.

* Asynchronous: Operations are executed independently of the main program flow, allowing other code to run while waiting for the operation to complete (e.g., API calls, file reading).

## What are Promises in JavaScript?

* A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states:

## What are arrow functions, and how are they different from regular functions?

Arrow functions are a shorthand syntax for writing functions. They differ from regular functions in several ways:

* They do not have their own this, instead inheriting it from the surrounding context.
* They cannot be used as constructors (i.e., new cannot be called on them).
* They do not have the arguments object.

## Explain the this keyword in JavaScript.

The this keyword refers to the context in which a function is called. It can refer to:

* The global object (in non-strict mode).

* The object calling the method 

## What are JavaScript data types?

* JavaScript has two categories of data types:
  - Primitive types: string, number, boolean, null, undefined, symbol, bigint
  - Reference types: Objects, arrays, and functions.

## What is event delegation?

Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to child elements. The event listener is triggered by events that propagate (bubble) up to the parent element.

##  Explain the difference between == and ===.

* == (Loose equality): Compares values after performing type coercion.

* === (Strict equality): Compares both value and type without performing type coercion.


## Rest operator

* It allows you to represent an indefinite number of arguments as an array. 

* The rest operator is particularly useful when working with functions that can accept a varying number of arguments or when dealing with arrays

## Spread operator

the spread operator allows you to create a new array by copying the elements from the original array. It also enables you to combine multiple arrays into a single array

## Nullish coalesing operator 

The nullish coalescing operator is used to return the right-hand side (RHS) value if the left-hand side (LHS) value is either null or undefined. Otherwise, it returns the LHS value

## Ternery operator

It is a shorthand version of the traditional if-else statement and allows you to make a decision between two values based on a condition. The ternary operator is also known as the conditional operator

## And operator

is used to perform logical operations between two or more expressions. It returns the first truthy value it encounters or the last falsy value if all the values are falsy

## Callbacks

* Callback is a function that is passed as an argument to another function and  which is then invoked inside the outer function to complete some kind of routine or action.

* Callbacks are a fundamental concept in JavaScript and are commonly used to handle asynchronous operations, such as network requests, file reading, and timers

## Async await

Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.

* Async 
  - function allows us to write promise-based code.
  - Async functions will always return a value.

* Await
  - The await keyword is used to wait for a promise to resolve. It can only be used within an async block.
  - Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.

## Promise

A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully

## Why we need typescript

* TypeScript is a superset of JavaScript that adds optional static typing to the language. It was created by Microsoft and is open-source

* TypeScript is its support for static typing.

* TypeScript allows you to define types for variables, function parameters, and return values, which helps catch type-related errors during development before running the code. 

* This provides better code correctness and reduces the likelihood of bugs related to type mismatches

## Array 

* Arrays are ordered collections of elements, and each element is accessed using a numerical index, starting from 0.

*  The order of elements matters, and they are stored in a sequential manner.

* We can access elements in an array using numeric indices.

## Object

* Objects are collections of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type.

* The order of key-value pairs is not guaranteed, and they are stored in an unordered manner

## Array vs object

Arrays and objects are both composite data types in JavaScript, but they serve different purposes and have different characteristics.

Both arrays and objects are powerful data structures in JavaScript,

## Recursion

Recursion is a where a function calls itself to solve a problem

## Loops

* for loop : The for loop is a control structure that repeats a block of code a specific number of times. It requires three statements: initialization, condition, and iteration.

*  while loop : The while loop executes a block of code as long as a specified condition is true

* do while loop : The do...while loop is similar to the while loop but guarantees that the code block will execute at least once, as the condition is evaluated after the block is executed.    

* for...of Loop : The for...of loop iterates over iterable objects like arrays, strings, maps, sets, etc. It directly accesses the values of the iterable.

*  for...in Loop : The for...in loop iterates over the enumerable properties (keys) of an object. It’s often used with objects but can also be used with arrays (though not recommended).

## Scope

Scope are where in our code a particular variable or function can be accessed or modified.

* there are two types of scopes
 
* Global scope
  - variable or function is declared outside of any function or block, it has global scope.

* Functional scope
  - Variables declared within a function using var are within function scope. They can only be accessed from within that function.

## Higher order functions

Higher-order function is a function that can accept other functions as parameters or return a function

## Asynchronus 

* Asynchronous JavaScript refers to the ability of JavaScript to handle tasks that take time (such as network requests, file reading, or timers) without blocking the execution of other code. 

* This allows JavaScript to perform non-blocking operations, meaning it can start a task and move on to other tasks without waiting for the previous one to finish.

## Modules

Modules are very usefull for make our code or functionality in seprate file to reuse it.That help to organise or maintain clean code.

## Browser APIs 

Browers APIs in javascript there are inbult functions that allow javascript to interact with the web browers to access its features

## DOM

DOM helps to javascript to update html content or styles without page reload 

## Event loop

The event loop in JavaScript is a runtime model that allows JavaScript to handle multiple tasks without blocking the main thread

## Javascript Engine and run time

* Engine : A JavaScript engine that reads, optimizes, and executes JavaScript code. These engines power modern web browsers and server-side environments

* Run time : A JavaScript runtime provides an environment where JavaScript code can execute. It includes the JavaScript engine along with additional tools and libraries