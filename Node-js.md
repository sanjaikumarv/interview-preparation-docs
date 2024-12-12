# Node js

## What is node js 

* Node.js is a JavaScript runtime environment execute JavaScript code on the server side, enabling back-end development 

* Node.js built on Chrome's V8 JavaScript engine.

## What is the difference between Node.js and JavaScript?

* ``JavaScript`` is a programming language that primarily runs in browsers to build interactive front-end applications

* ``Node.js``, on the other hand, is a runtime environment that allows JavaScript to run on the server side.

## What are the key features of Node.js?

* Asynchronous and Event-Driven.

* Single-threaded but highly scalable

* Built on the V8 JavaScript engine for high performance.

* Supports non-blocking I/O operations.

* Provides a rich library of modules through npm (Node Package Manager).

## What is API ?
An API (is an Application Programming Interface) allows different software applications or servers to communicate with each other using a set of rules and protocols.

## Why REST APIs commonly used?
The REST API offer several advantages that make them versatile, scalable, and easy to work.

* Simplicity and Ease of Use
  - Human-Readable: REST APIs use standard HTTP methods (GET, POST, PUT, DELETE), which are easy to understand and implement.

  - JSON Data Format: REST APIs often use JSON (JavaScript Object Notation), which is lightweight, easy to read, and supported by most programming languages.

* Stateless Architecture
  - No Server-Side State: Each request is independent and carries all necessary information (stateless), making it easier to scale horizontally (adding more servers to handle more traffic).

  - Scalability: Statelessness makes REST APIs ideal for large-scale, distributed systems.

* Flexibility and Compatibility
  - Language and Platform Agnostic: You can consume and build REST APIs using any programming language (e.g., JavaScript, Python, Java, C#).
  - Works Over HTTP: Since it uses the standard HTTP protocol, it can be used in web, mobile, and cloud-based applications.

## What is API end-point?
Endpoints are crucial for interacting with RESTful APIs, allowing clients to perform operations like retrieving, creating, updating, or deleting data.

## Components of a REST API Endpoint?
* Base URL:
  - The root address of the API server.
  - Example: https://api.example.com

* Resource Path:
  - Specifies the resource being accessed.
  - Example: /users, /products, /orders/123

* HTTP Method:
  - Defines the operation to perform (e.g., GET, POST, PUT, DELETE).

* Parameters 
  - Query Parameters: Extra info passed in the URL (e.g., ?page=2).
  - Path Parameters: Variable segments within the endpoint path (e.g., /users/{id}).


## What is npm in Node.js?

npm (Node Package Manager) is the default package manager for Node.js. It allows to install, manage, and share reusable JavaScript code packages.

## Asynchronous and Event-Driven

* Node.js uses non-blocking I/O operations handle Asynchronous, it handles multiple requests concurrently without waiting for one to complete.

* The event-driven architecture uses an event loop to handle asynchronous tasks.

## Modules

Node.js has a modular system to keep code organized and reusable.

* Core Modules: Built-in modules like fs, http, path, etc.

* Custom Modules: Developer-defined modules.

* Third-party Modules: Managed via npm (Node Package Manager).

## Event Loop

The event loop is a core mechanism of Node.js, enabling it to perform multiple tasks without blocking main thread. expectily used for handles all Asynchronous operations

* Timers

* Pending Callbacks

* I/O Polling

* Check

* Close Callbacks

## Streams

Streams in Node.js are a way to handle reading and writing of data efficiently. They allow processing of data in chunks, rather than loading the entire data set into memory

* Readable: For reading operations.

* Writable: For writing operations.

* Duplex: For both reading and writing.

* Transform: For modifying data during reading/writing.

## Buffer

* Buffers are used to handle binary data in Node.js. They are particularly useful when dealing with file system operations or TCP streams.

## callback hell.

Callback hell refers to the situation where multiple nested callbacks make the code hard to read and maintain. It can be mitigated using promises or async/await.

* Used in streams to handle raw data.

## Error Handling

Node.js relies on callbacks, promises, and async/await for error handling.

* Use try-catch blocks for synchronous code.

* Use .catch() for promises.

* Use error-handling middleware in Express.js.

* Always handle the error event on EventEmitter-based objects

## Middleware in Node.js

Middleware are functions in Node.js that have access to the request, response, and next middleware function. They are commonly used in frameworks like Express.js for handling tasks such as logging, authentication, and request parsing.

## File System (fs) Module

Node.js provides the fs module for file operations.

## Networking

The http and https modules allow building web servers.

## How does Node.js handle concurrency?

Node.js uses a single-threaded event loop to handle multiple concurrent requests. It delegates I/O operations to the system kernel, which is optimized to handle asynchronous operations.

## What are worker threads in Node.js?

Worker threads are used to execute JavaScript code in parallel, allowing (CPU-intensive tasks) to run without blocking the event loop.

## What is the difference between fork() and spawn() in Node.js?

* fork(): Used to create a new child process with its own Node.js instance, suitable for inter-process communication.

* spawn(): Used to spawn a new process to run a shell command.

## What are some security practices in Node.js?

* Validate and sanitize user input.

* Use HTTPS to secure data in transit.

* Avoid using deprecated or unmaintained npm packages.

* Implement proper authentication and authorization.

* Use environment variables for sensitive configurations.

## How do you handle asynchronous code in Node.js

You can handle asynchronous code using

* Callbacks
* Promises
* Async/Await

## Promises

The Promise object represents execute an asynchronous operation and its resulting value in node js.

## Async/await

async/await is used for cleaner way to handle asynchronous opertations. It is built on top of Promises.

* async Keyword: Declares an asynchronous function. It ensures the function always returns a Promise.

* await Keyword: Pauses the execution of an async function until the Promise resolves or rejects.

##  Callbacks

Callbacks are one of the fundamental concepts in Node.js for handling asynchronous operations like file handling, database queries, or API requests.

## difference between fs.readFile and readFileSync

* fs.readFile
  - Nature: Asynchronous (Non-blocking).

  - Execution: Executes the file reading operation in the background without blocking the main thread.

  - Callback: Requires a callback function to handle the result or errors.

  - Use Case: Suitable for applications where other operations should not wait for file reading to complete.

* fs.readFileSync
  - Nature: Synchronous (Blocking).

  - Execution: Blocks the execution of subsequent code until the file reading operation is complete

  - No Callback: Directly returns the content or throws an error.

  - Use Case: Suitable for scripts where sequential execution is required or in scenarios where simplicity is preferred over performance.


## Request vs Response

Request and response both are middleware functions in http request

* Request 
  - refers to the information sent by the client to the server when the client wants to access specific datas

  - That includes details such as the HTTP method (GET, POST, PUT, DELETE, etc.)

* Response 
  - refers to the information sent back by the server to the client request
  - It contains the HTTP status code indicating the success or failure of the request,

