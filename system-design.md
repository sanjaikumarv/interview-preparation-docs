# System design and senior engineer interview questions

## What is system design ?

System design is the process of deciding how a software system should be structured and how its different parts communicate, store data, scale, and handle failures.

## HLD (high level design) vs LLD (Low level design) ?

### HLD

High-Level System Design (HLD) is the process of designing the overall architecture of a software system before implementing the detailed code.

### LLD

Low-Level System Design describes the detailed implementation of individual components, including classes, methods, data models, interfaces, and their interactions.

## Reverse proxy

A reverse proxy is a server that sits between the client and your backend servers.

Instead of the client directly accessing your backend, the client sends the request to the reverse proxy, and the reverse proxy forwards the request to the appropriate backend server.

## What is api gateway ?

API Gateway is a server that sits between the clients and the microservices.

Instead of the client directly accessing the microservices, the client sends the request to the API Gateway, and the API Gateway forwards the request to the appropriate microservice.

## What is High Availability?

means designing a system so that it continues to work with minimal downtime even when some components fail.

## What is fault tolerance

Fault tolerance means a system can continue working even when one or more components fail.

## Where CDN appropriate

is a network of servers distributed across different geographic locations that cache and serve content closer to users.

## Read replicas

A read replica is a copy of the primary database that is mainly used to handle read queries.

Primary database handles writes, while read replicas handle some of the reads.

## Connection Pooling

means creating a pool of reusable database connections instead of creating a new database connection for every API request.

## Normalization vs Denormalization

### Normalization

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.

### Denormalization

Denormalization is the process of adding redundant data to a database to improve query performance.

## Redis data structures

String
Hash
List
Set
Sorted Set
Stream

## Redis persistence

Redis persistence is the mechanism used to save in-memory Redis data to disk so it can be recovered after a restart or failure

## Redis TTL

TTL defines how long a key should exist before Redis automatically deletes it.

## Cache-Aside Pattern

Cache-aside is a caching pattern where the application first checks the cache. If the data is available, it returns it from the cache. If not, it fetches the data from the database, stores it in the cache, and then returns it to the client.

## Write-Through Caching?

Write-through caching means the application writes data to the cache and database at the same time.
The cache always tries to stay synchronized with the database.

## Write-Behind Caching?

Write-behind caching means the application writes data to the cache first, and the cache updates the database later asynchronously.

## Cache eviction strategies

Cache eviction strategies are the algorithms used to decide which data to remove from the cache when it is full.

## cache stampede?

Cache stampede happens when a popular cache key expires, and many requests try to fetch the same data from the database at the same time.

## cache penetration?

Cache penetration happens when a request comes for a key that does not exist in the cache and also does not exist in database.

## Idempotency

Idempotency means performing the same operation multiple times produces the same final result as performing it once.

## How do you version APIs?

API versioning means creating different versions of an API so that changes in the API don't break existing clients.

If we make a breaking change, we create a new version and allow old clients to continue using the old version.

## CAP Theorem

- Consistency: Every user gets the latest data.
- Availability: System is always available (Every request gets response).
- Partition tolerance: System continues to work even when network communication between servers fails.

## kafka

Apache Kafka is a distributed event-streaming platform used to send, store, and process large amounts of messages/events between systems.

## Why would you use Kafka?

Kafka is used to handle a large number of messages/events between services reliably and asynchronously.

Kafka can handle a large number of messages.

Asynchronous processing

Multiple consumers

Message persistence

Decoupling

I would use Kafka when I need reliable, high-throughput, asynchronous communication between services, especially when multiple consumers need to process the same events or when I need message persistence and replay

## Kafka vs RabbitMQ

Both are message-broker systems, but they are commonly used for different purposes.

- RabbitMQ → Message processing / task queues
- Kafka → Event streaming / high-volume data

## DLQ (Dead Letter Queue)

A dead-letter queue stores messages that repeatedly fail processing, so they can be isolated and investigated without blocking the main queue

## How do you prevent cascading failures?

I prevent cascading failures using timeouts, circuit breakers, retries with exponential backoff and jitter, rate limiting, bulkheads, and asynchronous queues. The goal is to isolate failures so that one unhealthy service doesn't consume all the resources of other services and bring down the entire system

## How do you design for partial failure?

Partial failure means some parts of a distributed system fail while other parts are still working.

# Node js

## How promises are scheduled ?

Promise callbacks like .then(), .catch(), and .finally() are scheduled in the microtask queue and execute after the current synchronous code finishes, before normal event-loop tasks.

## What are the worker threads?

Worker Threads allow Node.js to execute CPU-intensive tasks in separate threads so that the main event loop remains responsive.

## What is backpressure?

Backpressure is a mechanism where a data producer slows down when the consumer cannot process data fast enough, preventing excessive memory usage and buffer overflow

## How do memory leaks occur in Node.js?

A memory leak happen when application keep object reference when the object is no longer needed. then garbage collector failed to cannot remove them. the node.js memory usage keep increasing.

## How does Garbage Collection affect Node.js?

When a garbage collection remove objects from memory that are no longer needed. GC consumes the CPU and can temporarily affect the application performance. when the application creates a large amount of garbage in memory then GC will runs more frequently.

## How to prevent memory leaks in Node.js?

- Avoid global variables.
- Clear intervals and timeouts.
- Remove event listeners when no longer needed.
- Use proper error handling.
- Use proper memory management.

## CPU-bound vs I/O-bound

### CPU bound

- CPU bounded task will utilize the CPU for long time.
- That will block the javascript main thread.
- Make process in separate thread (worker threads)

### I/O bound

- I/O bounded task will utilize the I/O for long time.
- That will not block the javascript main thread.
- Make process in main thread.

## How do you scale Node.js services?

I scale Node.js services primarily through horizontal scaling by running multiple stateless instances behind a load balancer. I use Redis for shared caching or session state, queues for asynchronous processing, and Worker Threads or separate services for CPU-intensive workloads. This allows the service to scale independently as traffic increases.

- Horizontal scaling
- keep services stateless
- Use clustering / multiple processes
- Use caching
- Use queues for background work
- Handle CPU-heavy work separately
-
