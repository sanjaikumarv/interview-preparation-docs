# 🟢 Node.js Interview Questions & Answers (4+ Years Experience)

---

## What is Backend?

The backend ensures the application's scalability, performance, and security. It acts as the backbone of any web application, supporting user interactions and providing dynamic content.

---

## What is Node.js?

* Node.js is a JavaScript runtime environment used to execute JavaScript code on the server side.
* Built on Chrome's V8 JavaScript engine.

---

## Difference between Node.js and JavaScript?

* **JavaScript**: A programming language that primarily runs in browsers for frontend development.
* **Node.js**: A runtime environment that enables JavaScript to run on the server.

---

## Key Features of Node.js

* Use JavaScript for both frontend and backend.
* Asynchronous and non-blocking I/O.
* Built on Chrome's V8 engine with JIT for fast execution.
* Rich ecosystem via npm with over a million packages.
* Supports microservices architecture.
* Cross-platform support: Windows, macOS, Linux.
* Large and active community.

---

## Why is MongoDB popular compared to other databases?

* NoSQL database that supports horizontal scaling.
* Stores unstructured data in flexible JSON-like documents.

---

## Difference between `require` and `import`

* **require**:

  * CommonJS syntax.
  * Synchronous loading.
  * Node.js specific.
  * Can be used conditionally.

* **import/export**:

  * ES6 standard.
  * Asynchronous loading.
  * Works in both Node.js and browsers.
  * Modules are loaded at the top of the file.

---

## Structured vs Unstructured Data

* **Structured**:

  * Predefined schema.
  * Uses rows and columns.
  * Supports relationships.

* **Unstructured**:

  * No predefined schema.
  * JSON, text, images, videos.

---

## Horizontal vs Vertical Scaling

* **Vertical**: Increase CPU/RAM on a single machine.
* **Horizontal**: Add multiple machines or instances.

---

## What is an API?

An API (Application Programming Interface) allows applications to communicate using a set of rules and protocols.

---

## Why are REST APIs commonly used?

* Simple HTTP methods: GET, POST, PUT, DELETE.
* Stateless architecture.
* JSON data format.
* Platform agnostic.
* Easy to scale.

---

## What is an API Endpoint?

* **Base URL**: Root address.
* **Resource Path**: /users, /orders/123
* **HTTP Methods**: GET, POST, etc.
* **Parameters**: Query (?page=1), Path (/user/\:id)

---

## What is GraphQL?

* Uses a single endpoint.
* Clients request specific fields.
* Ideal for nested/related data.

---

## What is npm in Node.js?

* Node Package Manager.
* Used to install/manage/share code packages.

---

## Asynchronous and Event-Driven

* Handles multiple requests without blocking.
* Uses event loop.

---

## Modules in Node.js

* **Core**: Built-in (fs, http).
* **Custom**: User-defined.
* **Third-party**: From npm.

---

## What is the Event Loop?

* Core mechanism for handling async operations.
* Phases: Timers, Pending Callbacks, I/O Polling, Check, Close Callbacks.

---

## What are Streams?

* Process data in chunks.
* **Readable**
* **Writable**
* **Duplex**
* **Transform**

---

## What is a Buffer?

* A Buffer in Node.js is a built-in object used to handle binary data directly in memory — especially when working with files, network streams, or binary protocols.
* Used in file and TCP operations.

---

## What is Callback Hell?

* Callback hell is when multiple nested callbacks make the code look messy and hard to manage.
It usually happens when we handle async operations in sequence without proper structure — like chaining fs.readFile, db.query, and so on inside each other.

* To fix it, I use Promises, async/await, or structure callbacks well using named functions.
Solved with Promises or async/await.

---

## Error Handling

* **try-catch**: For sync.
* **.catch()**: For Promises.
* **async/await**: Use try-catch.
* Middleware in Express.

---

## Middleware in Express

* Middleware in Express is a function that runs between the request and the response.
It can modify the request, response, or end the request cycle.
* I use middleware for tasks like logging, authentication, error handling, and parsing request bodies.

**Types**:

* Application-level
* Router-level
* Error-handling
* Built-in (express.json)
* Third-party (cors, morgan)

---

## File System (fs) Module

* For file operations like reading/writing.

---

## Networking in Node.js

* Networking in Node.js is done using built-in modules like http, https, net, and dns.
It allows me to build web servers, TCP/UDP servers, and even handle low-level socket communication.

* I commonly use the http module to create REST APIs, and the net module for working with raw TCP sockets.

---

## How does Node.js handle concurrency?

* Single-threaded event loop.
* Delegates I/O to OS kernel.

---

## Worker Threads in Node.js

* Used for CPU-intensive tasks.
* Prevents blocking the event loop.

---

## Difference between `fork()` and `spawn()`

* `fork()`: Runs a new Node.js instance.
* `spawn()`: Runs shell commands.

---

## Security Practices

* Validate/sanitize input.
* Use HTTPS.
* Avoid deprecated packages.
* Use env variables.
* Implement authentication.

---

## Handling Asynchronous Code

* Callbacks
* Promises
* async/await

---

## What are Promises?

* Handle async tasks with `.then()` and `.catch()`

---

## What is async/await?

* Syntactic sugar over Promises.
* `async` function always returns a Promise.
* `await` pauses execution until Promise resolves.

---

## What are Callbacks?

* Function passed as an argument to another function.
* Used in async operations.

---

## Difference between `fs.readFile` and `fs.readFileSync`

* `fs.readFile`:

  * Asynchronous.
  * Uses callback.
  * Non-blocking.

* `fs.readFileSync`:

  * Synchronous.
  * Blocking.

---

## Request vs Response

* **Request**: Sent from client with method, headers, data.
* **Response**: Sent from server with status, headers, body.

---

## Load Balancing in Node.js

* Distributes requests across multiple app servers.
* Helps scale apps and handle large traffic.

---

## Difference between `process.nextTick()`, `setImmediate()`, and `setTimeout()`

| Function             | Execution Timing                                  |
| -------------------- | ------------------------------------------------- |
| `process.nextTick()` | Runs **before any I/O**, after current operation. |
| `setImmediate()`     | Runs on the **next event loop iteration**.        |
| `setTimeout(fn, 0)`  | Runs after a minimum delay of 0ms.                |

---

## Clustering in Node.js

* Clustering is a built-in Node.js module used to utilize all CPU cores by creating multiple child instances of the same app, running on the same port, for load balancing.
* Each worker runs on a different CPU core.
* Enhances concurrency in multi-core environments.

---

## Middleware Chaining in Express

```js
app.use((req, res, next) => {
  console.log('Step 1');
  next();
});
```

---

## Synchronous vs Asynchronous Error Handling

* Sync: `try/catch`
* Async:

  * Callback: `if (err) {}`
  * Promise: `.catch()`
  * async/await: `try/catch`

---

## What is `util.promisify()`?

Converts a callback-based function to a promise-based one:

```js
const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
```

---

## Performance Tuning Techniques

* Use clusters/worker threads.
* Implement caching.
* Avoid blocking code.
* Use `gzip` compression.
* Optimize DB queries.
* Use monitoring tools like PM2 or Clinic.js.

## How do you implement retries and exponential backoff in Node.js?

## How do you handle concurrency and parallelism in Node.js?
Node.js is single-threaded but supports concurrent operations using:
 - Event loop
 - Non-blocking I/O
 - Asynchronous handling

## How do you handle graceful shutdown in Node.js?

## What is a memory leak in Node.js and how do you detect it?
A memory leak in Node.js happens when the application keeps references to memory that’s no longer needed, preventing the garbage collector from freeing it. Over time, this causes the memory usage to grow continuously, which can lead to performance issues or crashes.

## Difference between spawn(), exec(), and fork() in child_process?

## How do you manage background jobs in Node.js?
In Node.js, I manage background jobs using tools like Bull, Agenda, or node-cron, depending on the use case.
For queue-based background jobs (like sending emails, processing images, or payments), I use Bull with Redis. It allows job retries, concurrency, and delayed jobs.
For scheduled jobs (like daily reports), I use node-cron or Agenda, which supports recurring jobs with time-based patterns.

## What is the difference between process.nextTick() and setImmediate() and when would you use them?
process.nextTick() and setImmediate() both schedule functions to run asynchronously, but at different phases of the event loop.
  - process.nextTick() runs before the event loop continues — right after the current operation.
  - setImmediate() runs in the check phase, after I/O events.