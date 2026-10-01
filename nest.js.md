# NestJS Interview Questions & Answers

## Junior → Mid → Senior + Microservices Preparation

> **Candidate background:** Strong Node.js/NestJS/backend experience, primarily with monolithic applications. Familiar with microservices concepts, but no production hands-on microservices experience.

---

# 1. Interview Positioning

A good way to describe your experience honestly:

> My professional experience has primarily been with monolithic backend applications. I have hands-on experience with Node.js, NestJS, databases and API development. I have also studied microservices architecture and understand concepts such as service boundaries, API gateways, message brokers, service discovery, fault tolerance and eventual consistency. However, I haven't yet operated a production microservices system, and I'm looking to apply my existing backend experience in that environment.

---

# 2. Junior-Level NestJS Questions

## 2.1 What is NestJS?

**Answer:**

NestJS is a Node.js framework for building scalable server-side applications using TypeScript.

It is built on top of Express by default, although Fastify can also be used.

NestJS provides a structured architecture based on:

- Modules
- Controllers
- Providers
- Dependency Injection
- Guards
- Interceptors
- Pipes
- Middleware
- Exception Filters

One of its main benefits is that it encourages a modular and maintainable architecture compared with building everything directly with Express.

---

## 2.2 Why choose NestJS instead of Express?

**Answer:**

Express is lightweight and flexible, but it doesn't enforce a particular application structure.

NestJS provides an opinionated architecture with modules, dependency injection, decorators, guards, pipes and interceptors.

For a small API, Express may be enough. For a large application with multiple developers and many modules, NestJS provides better structure, maintainability and testability.

| Express                      | NestJS                                     |
| ---------------------------- | ------------------------------------------ |
| Minimal                      | Structured                                 |
| Less opinionated             | Opinionated                                |
| Manual dependency management | Built-in DI                                |
| Middleware-focused           | Middleware + Guards + Pipes + Interceptors |
| Easy to start                | Better structure for large applications    |

---

## 2.3 What is a Module?

A module is a logical boundary that groups a particular feature and its related business logic and functionality.

For example:

```text
UsersModule
OrdersModule
ProductsModule
PaymentsModule
```

Example:

```typescript
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
```

A module can contain controllers, providers and imported modules. It also controls which providers are exported and available to other modules.

---

## 2.4 What is Dependency Injection?

**Answer:**

Dependency Injection means a class does not create its dependencies itself. Instead, NestJS provides those dependencies through its dependency injection container.

```typescript
@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
}
```

Instead of:

```typescript
const repository = new UserRepository();
```

NestJS manages the dependency.

### Benefits

- Loose coupling
- Easier testing
- Easier replacement of implementations
- Better maintainability

---

## 2.5 What is a Controller?

A controller handles incoming requests and returns responses.

It defines API routes and normally delegates business logic to services.

```typescript
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
```

Complex business logic should generally not be placed directly inside controllers.

---

## 2.6 What is a Provider?

A provider is a class or value that NestJS can manage through its dependency injection system.

Services are the most common providers, but providers can also be:

- Repositories
- Factories
- Custom implementations
- Configuration providers

---

## 2.7 What is `@Injectable()`?

`@Injectable()` tells NestJS that a class can participate in the Dependency Injection (DI) system.

```typescript
@Injectable()
export class UserService {}
```

NestJS can then inject the service into another provider or controller.

---

## 2.8 What are Pipes?

Pipes are used to transform and validate incoming data before it reaches the controller.
Example:

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);
```

DTO:

```typescript
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;
}
```

---

## 2.9 What are Guards?

Guards determine whether a request should be allowed to reach the route handler.

They are commonly used for:

- Authentication
- Authorization
- Role checks
- Permission checks

Example:

```typescript
@UseGuards(AuthGuard)
@Get('/profile')
getProfile() {
  return this.userService.getProfile();
}
```

---

## 2.10 Middleware vs Guard

### Middleware

Middleware executes before the route handler and is useful for:

- Logging
- Request modification
- Generic preprocessing
- Request tracking

### Guard

A guard primarily answers:

> Is this request allowed to access this resource?

Typical flow:

```text
Request
   ↓
Middleware
   ↓
Guard
   ↓
Interceptor
   ↓
Pipe
   ↓
Controller
   ↓
Service
   ↓
Response
```

---

## 2.11 What are Interceptors?

Interceptors are classes that allow you to execute logic before and after a controller method is executed.

They can execute logic:

- Before the handler
- After the handler

Common use cases:

- Logging
- Response transformation
- Measuring execution time
- Caching
- Cross-cutting concerns

Example:

```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log(`Execution: ${Date.now() - start}ms`);
      }),
    );
  }
}
```

---

## 2.12 What are Exception Filters?

Exception filters allow us to customize how exceptions are handled and returned to clients.

They are useful for creating consistent API error responses.

For example:

```json
{
  "statusCode": 400,
  "message": "Invalid request",
  "error": "Bad Request"
}
```

A global exception filter can standardize errors across the application.

---

## 2.13 DTO vs Entity

A DTO defines the shape of data entering or leaving an API.

An entity generally represents the database model.

Example:

```text
CreateUserDto
 ├── name
 ├── email
 └── password
```

The database model may additionally contain:

```text
_id
passwordHash
createdAt
updatedAt
status
```

I would avoid directly exposing database entities as API contracts because that tightly couples the API to the database structure.

---

## 2.14 What is the NestJS Request Lifecycle?

A simplified request lifecycle:

```text
Request
   ↓
Middleware
   ↓
Guards
   ↓
Interceptors - Before
   ↓
Pipes
   ↓
Controller
   ↓
Service
   ↓
Interceptors - After
   ↓
Response
```

If an exception occurs, exception filters can handle it.

---

## 2.15 How would you organize a NestJS project?

Example:

```text
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── guards/
│   └── strategies/
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── dto/
│   └── entities/
│
├── common/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   └── pipes/
│
├── config/
├── app.module.ts
└── main.ts
```

---

# 3. Mid-Level NestJS Questions

## 3.1 What is a Dynamic Module?

A dynamic module allows us to configure a module when importing it.

This is useful when a module requires runtime configuration.

Example:

```typescript
ConfigModule.forRoot({
  isGlobal: true,
});
```

A custom example could be:

```typescript
DatabaseModule.forRoot({
  connectionString: process.env.DB_URL,
});
```

---

## What are Custom Decorators in NestJS?

A custom decorator is a user-defined decorator that adds reusable metadata or behavior to controllers, methods, or parameters.

## 3.2 What is `forRoot()` vs `forFeature()`?

`forRoot()` is generally used for application-level or global configuration.

`forFeature()` is generally used for feature-specific configuration or providers.

For example:

```typescript
DatabaseModule.forRoot(...)
```

could configure a database connection.

Then:

```typescript
DatabaseModule.forFeature(...)
```

could register models or repositories for a specific feature.

---

## 3.3 What is a Custom Provider?

Example:

```typescript
{
  provide: 'PAYMENT_SERVICE',
  useClass: StripePaymentService,
}
```

Then:

```typescript
constructor(
  @Inject('PAYMENT_SERVICE')
  private paymentService: PaymentService,
) {}
```

This is useful when programming against an abstraction instead of a concrete implementation.

---

## 3.4 What are NestJS Lifecycle Hooks?

Common lifecycle hooks include:

```text
OnModuleInit
OnModuleDestroy
OnApplicationBootstrap
OnApplicationShutdown
```

Example:

```typescript
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log("Module initialized");
  }
}
```

They are useful for initialization and cleanup logic.

---

## 3.5 How would you handle configuration?

I would use `ConfigModule`.

```typescript
ConfigModule.forRoot({
  isGlobal: true,
});
```

Then:

```typescript
constructor(
  private configService: ConfigService,
) {}

const dbUrl =
  this.configService.get<string>('DATABASE_URL');
```

This avoids directly accessing `process.env` throughout the application.

---

## 3.6 How would you implement authentication?

Typical architecture:

```text
Client
   ↓
POST /auth/login
   ↓
AuthController
   ↓
AuthService
   ↓
Validate credentials
   ↓
Generate JWT
   ↓
Client
   ↓
Authorization: Bearer <token>
   ↓
JwtGuard
   ↓
JwtStrategy
   ↓
Controller
```

---

## 3.7 Authentication vs Authorization

### Authentication

Answers:

> Who are you?

### Authorization

Answers:

> What are you allowed to do?

Example:

```text
User
 ├── READ_PROFILE
 └── CREATE_ORDER

Admin
 ├── READ_PROFILE
 ├── CREATE_ORDER
 ├── DELETE_USER
 └── MANAGE_PRODUCTS
```

Authorization can be implemented using roles or permissions with guards.

---

## 3.8 How would you handle validation?

I would use:

```text
DTO
+
class-validator
+
ValidationPipe
```

Example:

```typescript
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;
}
```

---

## 3.9 How would you improve NestJS API performance?

I would first identify the actual bottleneck rather than optimizing blindly.

Areas I would investigate:

```text
Application
├── Database indexes
├── Query optimization
├── Pagination
├── Caching
├── Connection pooling
├── Unnecessary processing
├── Async processing
└── Horizontal scaling
```

For example, if an endpoint takes two seconds, I would determine whether the delay comes from the application, database, network, external service or CPU-intensive work.

---

## 3.10 How would you implement caching?

A common approach is Redis.

```text
Request
   ↓
Check Redis
   ↓
Cache exists?
 ├── Yes → Return cached data
 │
 └── No
      ↓
   Database
      ↓
   Store in Redis
      ↓
   Response
```

Caching is especially useful for data that is frequently read but doesn't change frequently.

---

## 3.11 What is synchronous vs asynchronous communication?

### Synchronous

```text
Service A
   ↓ HTTP
Service B
   ↓
Response
   ↓
Service A
```

Service A waits for Service B.

### Asynchronous

```text
Service A
   ↓
Message Broker
   ↓
Service B
```

Service A doesn't necessarily wait for Service B to finish.

Examples:

```text
RabbitMQ
Kafka
AWS SQS
```

---

# 4. Microservices Questions

## 4.1 What is a Microservice?

A microservice architecture divides an application into independently deployable services, where each service owns a specific business capability.

Example:

```text
User Service
Order Service
Payment Service
Notification Service
```

Each service can potentially be developed, deployed and scaled independently.

### Honest answer for your background

> My production experience has primarily been with monolithic backend applications, so I haven't operated a production microservices system yet. However, I understand microservices concepts such as service boundaries, API gateways, service-to-service communication, message brokers, service discovery, fault tolerance and eventual consistency.

---

## 4.2 Monolith vs Microservices

| Monolith                             | Microservices                               |
| ------------------------------------ | ------------------------------------------- |
| One deployable application           | Multiple deployable services                |
| Usually one codebase                 | Multiple services/codebases                 |
| Easier initially                     | More operational complexity                 |
| Usually simpler communication        | Network communication                       |
| Easier database transactions         | Distributed transactions are harder         |
| Usually scales the whole application | Individual services can scale independently |
| Simpler debugging                    | Requires distributed observability          |

---

## 4.3 Why do you want to work with Microservices if you haven't used them professionally?

### Interview Answer

> My professional experience has mainly been with monolithic backend applications, and I've worked extensively with Node.js, NestJS, databases and API development.
>
> Through that experience I've also encountered problems related to scalability, modularity, performance and deployment. That motivated me to understand how these problems are handled in distributed systems.
>
> I've studied microservice concepts such as API gateways, service-to-service communication, message brokers, Redis, Kafka, RabbitMQ, service discovery, Docker and distributed transactions.
>
> I haven't yet operated a production microservices architecture, so I wouldn't claim that experience. But I believe my existing backend fundamentals give me a strong foundation to transition into a microservices environment.

---

## 4.4 How would you split a monolith into microservices?

Suppose we have:

```text
E-commerce Monolith

Users
Products
Orders
Payments
Notifications
```

I wouldn't automatically create one service for every table or module.

I would first identify business boundaries.

Potential architecture:

```text
                 API Gateway
                      |
        ┌─────────────┼──────────────┐
        ↓             ↓              ↓
    User Service  Order Service  Product Service
                       |
                       ↓
                Payment Service
                       |
                       ↓
              Notification Service
```

I would consider:

- Business boundaries
- Service ownership
- Database ownership
- Communication patterns
- Deployment
- Authentication
- Failure handling
- Observability

---

## 4.5 Should every Microservice have its own database?

Ideally, each microservice should own its data.

Example:

```text
User Service
 └── User DB

Order Service
 └── Order DB

Payment Service
 └── Payment DB
```

Other services should normally access that data through the owning service's APIs or events rather than directly querying its database.

This reduces coupling.

---

## 4.6 What happens if one Microservice goes down?

Example:

```text
Order Service
      ↓
Payment Service
      X
    DOWN
```

Possible approaches:

- Timeout
- Retry
- Exponential backoff
- Circuit breaker
- Fallback
- Asynchronous processing
- Dead-letter queue
- Monitoring and alerting

Example:

```text
Order
 ↓
Payment
 ↓
Timeout
 ↓
Retry
 ↓
Retry
 ↓
Circuit Breaker
```

---

## 4.7 What is a Circuit Breaker?

A circuit breaker prevents repeatedly calling a failing service.

Typical states:

```text
CLOSED
  ↓ repeated failures
OPEN
  ↓ recovery period
HALF-OPEN
  ↓ successful test
CLOSED
```

When the circuit is open, calls to the unhealthy service are temporarily rejected or handled through a fallback.

---

## 4.8 What is an API Gateway?

Instead of the frontend calling every service directly:

```text
Frontend
 ├── User Service
 ├── Order Service
 ├── Payment Service
 └── Product Service
```

we can use:

```text
Frontend
     ↓
 API Gateway
     ↓
 ┌───┼────┬──────┐
 ↓   ↓    ↓      ↓
User Order Payment Product
```

An API Gateway can handle:

- Routing
- Authentication
- Rate limiting
- Request transformation
- Logging
- Request aggregation

---

## 4.9 What is Service Discovery?

If services run dynamically, their IP addresses or container instances can change.

Hardcoding service IPs creates tight coupling.

Service discovery allows services to locate available instances dynamically.

Examples include:

- Kubernetes DNS
- Consul
- Eureka
- Cloud provider service discovery

---

## 4.10 Kafka vs RabbitMQ

### RabbitMQ

Often suitable for:

- Task processing
- Work queues
- Routing
- Command-style messaging
- Background jobs

### Kafka

Often suitable for:

- Event streaming
- High-throughput event pipelines
- Event replay
- Data streaming
- Multiple independent consumers

A good interview answer:

> I wouldn't choose Kafka simply because it is popular. I would choose based on throughput, ordering requirements, replay requirements, consumer model, delivery semantics and operational requirements.

---

## 4.11 What is Eventual Consistency?

Suppose:

```text
Order Service
     ↓
Order Created
     ↓
Event
     ↓
Payment Service
```

For a short period:

```text
Order = CREATED
Payment = NOT_PROCESSED
```

After the payment service processes the event:

```text
Order = CONFIRMED
Payment = SUCCESS
```

The system eventually reaches a consistent state rather than requiring all services to update atomically at exactly the same time.

---

# 5. Senior-Level Questions

## 5.1 How do you handle Distributed Transactions?

In a monolith:

```text
BEGIN TRANSACTION

Create Order
Create Payment
Update Inventory

COMMIT
```

A single database transaction may handle this.

In microservices, different services may own different databases.

A common approach is the **Saga Pattern**.

Example:

```text
Create Order
     ↓
Reserve Inventory
     ↓
Process Payment
     ↓
Confirm Order
```

If payment fails:

```text
Payment Failed
     ↓
Release Inventory
     ↓
Cancel Order
```

The compensating actions undo the effects of previously completed steps.

---

## 5.2 What is Idempotency?

Idempotency means performing the same operation multiple times should not produce multiple unintended effects.

This is especially important for payments.

Without idempotency:

```text
Request
 ↓
Charge ₹100
 ↓
Network timeout
 ↓
Client retries
 ↓
Charge ₹100 again
```

With an idempotency key:

```text
Idempotency-Key: abc123
```

The server can recognize the same operation and avoid processing it twice.

---

## 5.3 How would you design a scalable NestJS system?

A good answer:

> I would first understand the business requirements, traffic patterns and performance requirements instead of immediately choosing microservices.
>
> For a monolithic system, I would keep the application modular, optimize database access, add proper indexes, caching and asynchronous processing where appropriate.
>
> If the system grows and certain business domains require independent scaling or deployment, I would consider extracting those domains into separate services.
>
> At the infrastructure level, I would use load balancing and horizontal scaling. For asynchronous workloads, I could introduce a message broker such as RabbitMQ or Kafka depending on the use case.
>
> I would also consider observability, centralized logging, metrics, distributed tracing, authentication, rate limiting and failure handling.

---

## 5.4 How would you handle 1 million requests?

Don't simply say:

> NestJS can handle one million requests.

Instead, discuss the architecture:

```text
                Load Balancer
                     |
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       NestJS     NestJS     NestJS
          |          |          |
          └──────────┼──────────┘
                     ↓
                   Redis
                     |
                  Database
```

Then investigate:

- Horizontal scaling
- Load balancing
- Database indexes
- Caching
- Connection pooling
- CDN
- Asynchronous processing
- Rate limiting
- Database scaling
- Monitoring

Important point:

> I would benchmark the actual workload rather than assume a particular architecture can handle a specific number of requests.

---

## 5.5 How would you prevent a database from becoming a bottleneck?

I would investigate:

```text
Slow queries
Indexes
Connection pool
Query frequency
Large documents
Pagination
N+1 queries
Caching
Read replicas
Partitioning
Sharding
```

For MongoDB, I would also consider:

- Compound indexes
- Aggregation optimization
- `$lookup`
- Pagination
- `explain()`
- Connection pooling

---

## 5.6 What is Rate Limiting?

Rate limiting controls how many requests a client can make within a specific period.

Example:

```text
POST /login

10 requests / minute / IP
```

After exceeding the limit:

```text
429 Too Many Requests
```

It helps protect APIs from excessive traffic and abuse.

---

## 5.7 Rate Limiting vs Throttling

**Rate limiting** defines how many requests are allowed within a particular period.

Example:

```text
100 requests / minute
```

**Throttling** controls or slows request processing when traffic exceeds a defined capacity.

They are related concepts but not exactly the same.

---

## 5.8 Node.js is single-threaded. How can NestJS handle many requests?

Node.js executes JavaScript on the event loop, but it can handle many concurrent I/O operations because much of the I/O work is asynchronous.

For CPU-heavy workloads, the event loop can become blocked.

Possible solutions:

- Worker Threads
- Child processes
- Background workers
- Separate services

Example:

```text
NestJS
   ↓
Queue
   ↓
Worker
   ↓
Heavy Processing
```

---

## 5.9 What if CPU-heavy AI processing is inside your NestJS API?

I would avoid:

```text
NestJS
   ↓
CPU-heavy AI processing
   ↓
Response
```

Instead:

```text
NestJS
   ↓
Queue
   ↓
AI Worker
   ↓
Database
```

For example:

```text
NestJS
 ↓
RabbitMQ
 ↓
Python AI Worker
 ↓
Database
```

This prevents heavy processing from blocking the API server.

---

# 6. Senior Scenario Questions

## 6.1 An API suddenly takes 5 seconds. How would you debug it?

I would not immediately increase CPU or add more servers.

I would investigate systematically:

```text
1. Check application metrics
2. Measure endpoint execution time
3. Check database query duration
4. Check external API latency
5. Check CPU and memory
6. Check event-loop blocking
7. Check logs
8. Check distributed traces
9. Check database indexes
10. Reproduce and profile
```

The goal is to identify the actual bottleneck first.

---

## 6.2 How would you design an Order + Payment system?

Possible architecture:

```text
                    API Gateway
                         |
                         ↓
                  Order Service
                         |
                  Create Order
                         |
                         ↓
                    Event Bus
                         |
              ┌──────────┴──────────┐
              ↓                     ↓
       Payment Service       Notification Service
              |
              ↓
       Payment Provider
```

Potential flow:

```text
1. User creates order
2. Order Service creates PENDING order
3. OrderCreated event is published
4. Payment Service processes payment
5. PaymentCompleted or PaymentFailed event is published
6. Order Service updates order state
7. Notification Service sends notification
```

Important concerns:

- Idempotency
- Retries
- Timeouts
- Eventual consistency
- Dead-letter queues
- Observability
- Compensation/Saga

---

# 7. Questions Where You Should Be Honest About Your Experience

If the interviewer asks:

### "Have you worked with Kafka in production?"

Don't say yes if you haven't.

Use:

> I haven't used Kafka in a production system yet. I understand the concepts and have studied event streaming, partitions, consumer groups, offsets and message processing. My production experience has primarily been with monolithic backend applications.

---

### "Have you implemented microservices?"

Use:

> I haven't owned a production microservices architecture yet. My production experience has primarily been monolithic. However, I understand how services can be separated by business boundaries and how they can communicate through REST, gRPC or asynchronous messaging.

---

### "Have you worked with Kubernetes?"

If you haven't:

> I haven't operated Kubernetes in production. I understand the core concepts such as pods, deployments, services, ingress, scaling and configuration, but my production infrastructure experience has primarily been around Docker, Nginx, PM2 and AWS.

---

# 8. Strong Transition Statement

If the interviewer asks:

> "Why should we consider you for a microservices role when your experience is mostly monolithic?"

You can answer:

> My strength is my backend engineering experience rather than a specific architecture label. I've worked with Node.js, NestJS, APIs, databases, authentication, performance optimization and deployment in real applications.
>
> I understand that microservices introduce additional challenges such as distributed communication, eventual consistency, service failures and observability. I've been studying those concepts and I understand the architectural reasoning behind them.
>
> I don't want to overstate my experience by saying I've operated a production microservices system when I haven't. But I believe my existing backend fundamentals give me a strong foundation to learn the production aspects quickly.

---

# 9. Quick Revision Sheet

## NestJS

```text
Module
Controller
Provider
Dependency Injection
Middleware
Guard
Pipe
Interceptor
Exception Filter
DTO
Dynamic Module
Lifecycle Hooks
Custom Provider
```

## Backend

```text
JWT
Authentication
Authorization
Validation
Caching
Redis
Rate Limiting
Throttling
Database Indexing
Transactions
Connection Pooling
Pagination
Query Optimization
```

## Microservices

```text
Service Boundary
API Gateway
Service Discovery
REST
gRPC
RabbitMQ
Kafka
Event-Driven Architecture
Eventual Consistency
Saga Pattern
Distributed Transactions
Idempotency
Circuit Breaker
Retry
Timeout
Dead Letter Queue
Distributed Tracing
```

## Scalability

```text
Load Balancer
Horizontal Scaling
Caching
Database Scaling
Read Replicas
Sharding
Queues
CDN
Connection Pooling
Observability
```

---

# 10. Recommended Interview Strategy

Your preparation should follow this progression:

```text
                    NestJS
                      │
                      ↓
                Node.js Internals
                      │
                      ↓
              Database & Performance
                      │
                      ↓
              Redis / Caching / Queues
                      │
                      ↓
              Microservices Concepts
                      │
                      ↓
        Distributed Systems & Reliability
                      │
                      ↓
                System Design
```

The key is to connect your **real experience** to the concepts.

For example:

> "In my previous monolithic application, I handled X. If we moved that architecture toward microservices, I would consider Y because..."

That demonstrates practical engineering thinking without claiming experience you don't have.
