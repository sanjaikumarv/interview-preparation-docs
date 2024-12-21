# Node js

## What is backend?
The backend ensures the application's scalability, performance, and security. It acts as the backbone of any web application, supporting user interactions and providing dynamic content.

## What is node js 

* Node.js is a JavaScript runtime environment execute JavaScript code on the server side, enabling back-end development 

* Node.js built on Chrome's V8 JavaScript engine.

## What is the difference between Node.js and JavaScript?

* ``JavaScript`` is a programming language that primarily runs in browsers to build interactive front-end applications

* ``Node.js``, on the other hand, is a runtime environment that allows JavaScript to run on the server side.

## What are the key features of Node.js?

* Based on JavaScript we can use one language for both frontend  and backend

* Node.js uses Asynchronous and Non-Blocking I/O operation allows it to handle multiple requests simultaneously.

* This makes it ideal for I/O-heavy applications like APIs, real-time apps, and data streaming.
  
* Node.js build with chrome V8 Engine for Fast Execution for the Javascript s code JIT(Just in time)  

* Node.js has an rich package ecosystem via npm (Node Package Manager).
  - With over 1 million libraries, makes it easy to add functionality quickly 

* Microservices Architecture
  - Can able to build and deploy small, independent services that communicate over APIs.

* Cross-Platform Compatibility
  - Node.js works on multiple operating systems: Windows, macOS, and Linux.
  - This makes development and deployment flexible and consistent.

* Community Support
  - Node.js has a large and active community
  - Continuous updates, numerous tutorials, and strong community support make it easy to solve issues and find resources.


## Why mongodb is familer for other data bases?

MongoDB using no-SQL database for the familierity ans also they able to horizandal scalling


## what is diff between require and import?

* require
  - Was common js feature
  - Modules are loaded synchronously, which means the execution waits for the required module to be fully loaded before continuing.
  - A module can export multiple properties, but they are grouped into a single object.
  - It’s specific to Node.js and not native to browsers.
  - require() can be used anywhere in the code, meaning modules can be conditionally loaded.

* import/export
  - ES6 feature.
  - Asynchronously load the file meaning they are loaded non-blockingly.
  - This module system is a standard in modern JavaScript and works in both Node.js and browser environments.
  - Module can export multiple values, and they can be imported individually by name.
  - Modules are loaded at the top of the file

## What is structured and un structured data in db?

* Structured Data : 
  - Have highly organized and follows a predefined schema (format).
  - Consistent Format: Each piece of data follows a specific format or data type (e.g., integers, strings, dates).
  - Relationships: Data can be related to other data using foreign keys or joins.
  - Stores data in the table Rows and columns format

* Unstructured Data :
  - Unstructured Data does not have a predefined schema or consistent format.
  - No Fixed Schema: Data can be in various formats (text, images, videos, etc.) 
  - Stores data in document type (json key value pair)


## What is horizandal and vertical scalling in db?

* Vertical scalling was increase single instance cpu and gpu for load handling and db space

* Horizandal scalling was add two or more instances for db load handling


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


## GraphQl api?

* GraphQL typically operates through a single endpoint for all queries, mutations, and subscriptions.
* You can query multiple fields or related data in a single request. This is helpful when fetching complex, nested data structures.

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

## Middleware in express

Middleware are the functions that allows you to intercept and manipulate requests and responses before they reach route handlers.

* Types of middlewares
  - Application-level middleware : These middleware functions are bound to an instance of express() and are executed for all requests to the application or specific routes.

  - Router-level middleware: These middleware functions work on express.Router() instances and are bound to specific routes.

  - Error-handling middleware: Used specifically for handling errors. It takes four arguments: (err, req, res, next).

  - Built-in middleware: Express has built-in middleware functions like express.static(), express.json(), express.urlencoded()

  - Third-party middleware: External libraries such as cors, morgan, helmet, etc., can be used as middleware in Express.

## File System (fs) Module

Node.js provides the fs module for file operations.

## Networking

The http and https modules allow building web servers.

## How does Node.js handle concurrency?

Node.js uses a single-threaded event loop to handle multiple concurrent requests. It delegates I/O operations to the system kernel, which is optimized to handle asynchronous operations.

## What are worker threads in Node.js?

Worker threads are used to execute JavaScript in a CPU-intensive tasks to run without blocking the event loop.

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

## Load balancing in node js ?

We can handle many user request at the time.

Load balancing means we can creating few Node.js app servers to handle many users request at the time.