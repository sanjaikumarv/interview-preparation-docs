# NestJS Interview Questions --- Detailed Interview Answers

This guide contains 181 NestJS interview questions with **detailed but
interview-friendly answers**.

The answers are designed around:

- What it is
- Why it is used
- Simple example
- Important interview points
- Code snippets where useful

---

# 🟢 1. Basic NestJS

## 1. What is NestJS?

NestJS is a Node.js framework for building scalable and maintainable
backend applications.

It is built with TypeScript and internally uses Express by default,
although Fastify can also be used.

NestJS provides a structured architecture using:

- Modules
- Controllers
- Providers
- Dependency Injection
- Guards
- Pipes
- Interceptors
- Middleware
- Exception Filters

A simple architecture is:

```text
Client
  ↓
Controller
  ↓
Service
  ↓
Database
```

### Interview answer

> NestJS is a TypeScript-based Node.js framework designed for scalable
> server-side applications. It provides a structured architecture using
> modules, controllers, providers, dependency injection, guards, pipes,
> and interceptors.

---

## 2. Why would you choose NestJS over Express.js?

Express is lightweight and flexible, but it doesn't force a particular application structure.

As an application becomes large, developers need to decide how to
organize:

- Controllers
- Services
- Validation
- Authentication
- Error handling
- Dependency management

NestJS provides these patterns out of the box.

```text
Express
  ↓
You design the architecture

NestJS
  ↓
Framework provides an architecture
```

### Interview answer

> I would choose NestJS when I need a structured, scalable backend.
> NestJS provides dependency injection, modules, guards, pipes,
> interceptors, exception filters, testing utilities, and microservice
> support out of the box.

---

## 3. What are the main features of NestJS?

Important features include:

- TypeScript support
- Dependency Injection
- Modular architecture
- Controllers
- Providers
- Middleware
- Guards
- Pipes
- Interceptors
- Exception Filters
- Validation
- WebSockets
- Microservices
- Testing support

The main benefit is that these features work together as one framework.

---

## 4. What is a Module?

A module is a logical container for related functionality.

Example:

```text
UserModule
 ├── UserController
 ├── UserService
 └── UserRepository
```

Example:

```typescript
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

Modules help us organize large applications.

---

## 5. What is a Controller?

A controller receives incoming requests and sends responses.

Example:

```typescript
@Controller("users")
export class UserController {
  @Get()
  getUsers() {
    return ["John", "David"];
  }
}
```

Request:

```text
GET /users
```

is handled by the controller.

### Important point

Controllers should generally contain **request-handling logic**, not
large business logic.

Business logic should normally be placed in services/providers.

---

## 6. What is a Provider?

A provider is a class managed by NestJS's Dependency Injection
container.

Services are the most common type of provider.

```typescript
@Injectable()
export class UserService {
  findUsers() {
    return [];
  }
}
```

The controller can inject it:

```typescript
constructor(
  private readonly userService: UserService
) {}
```

---

## 7. What is Dependency Injection?

Dependency Injection means a class receives the objects it depends on
instead of creating them itself.

Without DI:

```typescript
class UserController {
  private userService = new UserService();
}
```

With DI:

```typescript
class UserController {
  constructor(private readonly userService: UserService) {}
}
```

NestJS creates and injects `UserService`.

### Benefits

- Loose coupling
- Easier testing
- Better maintainability
- Easy replacement of implementations

---

## 8. How does Dependency Injection work in NestJS?

NestJS has a Dependency Injection container.

When you register:

```typescript
@Module({
  providers: [UserService],
})
```

NestJS knows how to create `UserService`.

Then:

```typescript
constructor(
  private readonly userService: UserService
) {}
```

causes NestJS to inject that instance.

Simplified:

```text
Module
  ↓
DI Container
  ↓
Creates UserService
  ↓
Injects into Controller
```

---

## 9. What is `@Injectable()`?

`@Injectable()` marks a class as a provider that can participate in
NestJS dependency injection.

Example:

```typescript
@Injectable()
export class PaymentService {}
```

It doesn't mean the class must always be a service. It means NestJS can
manage the class through its DI system.

---

## 10. What is the purpose of `@Module()`?

`@Module()` defines the structure of a NestJS module.

It can contain:

```typescript
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
```

- `imports` → modules required by this module
- `controllers` → controllers belonging to the module
- `providers` → services/providers
- `exports` → providers that other modules can use

---

## 11. What is the purpose of `@Controller()`?

`@Controller()` marks a class as a controller.

```typescript
@Controller("users")
export class UserController {}
```

The string defines the base route.

For example:

```text
/users
```

---

## 12. Controller vs Provider?

### Controller

Responsible for:

- Receiving HTTP requests
- Reading parameters/body/query
- Calling services
- Returning responses

### Provider/Service

Responsible for:

- Business logic
- Database operations
- External API calls
- Reusable functionality

Example:

```text
Controller
    ↓
UserService
    ↓
UserRepository
    ↓
Database
```

---

## 13. What is `main.ts`?

`main.ts` is the entry point of a NestJS application.

Example:

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
```

It is commonly where we configure:

- Global pipes
- Global filters
- Global guards
- CORS
- Prefixes
- Application startup

---

## 14. What is `NestFactory.create()`?

`NestFactory.create()` creates a NestJS application instance.

```typescript
const app = await NestFactory.create(AppModule);
```

It initializes the NestJS dependency injection container and application
modules.

---

## 15. How do you create a REST API in NestJS?

Create a controller:

```typescript
@Controller("users")
export class UserController {
  @Get()
  findAll() {}

  @Post()
  create() {}

  @Get(":id")
  findOne(@Param("id") id: string) {}
}
```

This creates:

```text
GET    /users
POST   /users
GET    /users/:id
```

---

## 16. How do you define route parameters?

Use `@Param()`.

`x``typescript
@Get(':id')
getUser(@Param('id') id: string) {
return this.userService.findById(id);
}

````

For:

```text
GET /users/123
````

`id` will be:

```text
123
```

---

## 17. How do you read query parameters?

Use `@Query()`.

```typescript
@Get()
getUsers(
  @Query('page') page: number,
  @Query('limit') limit: number,
) {}
```

Request:

```text
GET /users?page=1&limit=10
```

---

## 18. How do you read request body?

Use `@Body()`.

```typescript
@Post()
createUser(@Body() dto: CreateUserDto) {
  return this.userService.create(dto);
}
```

The request JSON is converted into the DTO structure when
validation/transformation is configured.

---

## 19. How do you handle HTTP status codes?

NestJS provides `@HttpCode()` and built-in exceptions.

Example:

```typescript
@Post()
@HttpCode(HttpStatus.CREATED)
createUser() {}
```

Or:

```typescript
throw new NotFoundException("User not found");
```

---

## 20. How do you handle exceptions in NestJS?

NestJS provides built-in HTTP exceptions:

```typescript
BadRequestException;
UnauthorizedException;
ForbiddenException;
NotFoundException;
ConflictException;
InternalServerErrorException;
```

Example:

```typescript
if (!user) {
  throw new NotFoundException("User not found");
}
```

NestJS converts this into an appropriate HTTP response.

---

# 🟡 2. Modules & Dependency Injection

## 21. What is Dependency Injection?

Dependency Injection is a pattern where dependencies are provided to a class rather than created inside it.

Example:

```typescript
constructor(
  private readonly userService: UserService
) {}
```

This makes classes easier to test and maintain.

---

## 22. Why is Dependency Injection useful?

It provides:

- Loose coupling
- Better unit testing
- Easy replacement of implementations
- Better separation of responsibilities
- Centralized dependency management

For example, a service can depend on an interface/token rather than
directly constructing a database client.

---

## 23. What is a Custom Provider?

A custom provider lets us control how NestJS creates or supplies a
dependency.

Example:

```typescript
{
  provide: 'CONFIG',
  useValue: {
    port: 3000
  }
}
```

Then:

```typescript
constructor(
  @Inject('CONFIG') private config: any
) {}
```

---

## 24. What are the different types of providers?

The major custom provider types are:

```text
useClass
useValue
useFactory
useExisting
```

They allow us to control provider creation.

---

## 25. What is `useClass`?

`useClass` tells NestJS which class should be used for a token.

Example:

```typescript
{
  provide: PaymentService,
  useClass: StripePaymentService
}
```

Whenever `PaymentService` is requested, NestJS creates
`StripePaymentService`.

---

## 26. What is `useValue`?

`useValue` provides a fixed object/value.

Example:

```typescript
{
  provide: 'APP_CONFIG',
  useValue: {
    environment: 'production'
  }
}
```

Useful for:

- Configuration
- Constants
- Mock objects
- Testing

---

## 27. What is `useFactory`?

`useFactory` dynamically creates a provider.

Example:

```typescript
{
  provide: 'DATABASE',
  useFactory: (configService: ConfigService) => {
    return createDatabaseConnection(
      configService.get('DB_URL')
    );
  },
  inject: [ConfigService]
}
```

Useful when provider creation depends on other services/configuration.

---

## 28. What is `useExisting`?

`useExisting` creates an alias to an already registered provider.

```typescript
{
  provide: 'CACHE',
  useExisting: RedisService
}
```

It doesn't create another instance; it points to the existing provider.

---

## 29. What is a Dynamic Module?

A dynamic module is a module whose providers/configuration can be
determined dynamically.

For example:

```typescript
DatabaseModule.forRoot({
  host: "localhost",
  port: 5432,
});
```

The module can create providers based on the configuration.

---

## 30. Why do we need Dynamic Modules?

They are useful when building reusable libraries.

For example, a company could create:

```text
@company/logger
@company/database
@company/auth
```

Each application can configure them differently.

---

## 31. What is `forRoot()`?

`forRoot()` is a common convention for configuring a module once for the
entire application.

Example:

```typescript
DatabaseModule.forRoot({
  host: "localhost",
});
```

It normally provides global/base configuration.

---

## 32. What is `forRootAsync()`?

`forRootAsync()` is useful when configuration must be created
asynchronously or requires injected dependencies.

Example:

```typescript
DatabaseModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    url: config.get("DATABASE_URL"),
  }),
});
```

---

## 33. What is `forFeature()`?

`forFeature()` is commonly used to register feature-specific resources.

For example, with Mongoose:

```typescript
MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema,
  },
]);
```

It makes the User model available to that module.

---

## 34. Global vs Local Module?

A normal module must generally be imported where its exported providers
are needed.

A global module can make exported providers available throughout the
application.

Use global modules carefully because excessive global dependencies can
make architecture harder to understand.

---

## 35. What does `@Global()` do?

`@Global()` marks a module as global.

```typescript
@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
```

Other modules can use the exported provider without repeatedly importing
the module.

---

## 36. How do modules communicate?

Module A exports a provider:

```typescript
@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

Module B imports UserModule:

```typescript
@Module({
  imports: [UserModule],
})
export class OrderModule {}
```

Now OrderModule can inject UserService.

---

## 37. What happens if a provider is not exported?

It remains private to its module and cannot normally be injected from
another module.

---

## 38. What happens if a provider is exported but the module isn't imported?

The consuming module doesn't have access to that provider through
NestJS's module dependency graph.

---

## 39. How would you structure a large NestJS application?

Prefer feature-based organization:

```text
src/
  modules/
    users/
      users.controller.ts
      users.service.ts
      users.module.ts

    orders/
      orders.controller.ts
      orders.service.ts
      orders.module.ts

    payments/
      payments.controller.ts
      payments.service.ts
      payments.module.ts

  common/
  config/
  database/
  main.ts
```

This keeps domain responsibilities separated.

---

# 🟡 3. Middleware, Guards, Interceptors & Pipes

## 40. What is Middleware?

Middleware executes during the request pipeline before the route
handler.

Common uses:

- Logging
- Request IDs
- Reading/modifying request data
- Authentication preprocessing
- Request preprocessing

Example:

```text
Request
 ↓
Middleware
 ↓
Controller
```

---

## 41. What is a Guard?

A Guard determines whether a request is allowed to reach the controller.

```typescript
canActivate(context: ExecutionContext): boolean {
  return true;
}
```

Common uses:

- JWT authentication
- Role authorization
- Permission checking

---

## 42. What is an Interceptor?

An interceptor wraps the execution of a route handler.

It can perform work:

```text
Before controller
      ↓
Controller
      ↓
After controller
```

Common uses:

- Logging
- Response transformation
- Execution timing
- Caching
- Serialization

---

## 43. What is a Pipe?

A Pipe transforms or validates input data before it reaches the
controller.

Example:

```typescript
@UsePipes(new ValidationPipe())
```

Common use:

```text
Request Body
 ↓
ValidationPipe
 ↓
Controller
```

---

## 44. Middleware vs Guard?

### Middleware

Main purpose:

> Process the request.

### Guard

Main purpose:

> Decide whether the request is allowed.

Example:

```text
Request
 ↓
Middleware → Add request ID
 ↓
Guard → Is user authenticated?
 ↓
Controller
```

---

## 45. Guard vs Interceptor?

Guard:

> Can this request execute?

Interceptor:

> What should happen before/after the handler executes?

Example:

```text
Guard → Check JWT
Interceptor → Log execution time
Controller
```

---

## 46. Pipe vs Middleware?

Middleware operates at the broader request level.

Pipes are specifically designed for:

- Validation
- Transformation
- Controller arguments

For example:

```text
Middleware → Add request ID
Pipe → Validate CreateUserDto
```

---

## 47. What is the NestJS Request Lifecycle?

A simplified HTTP lifecycle is:

```text
Request
 ↓
Middleware
 ↓
Guards
 ↓
Interceptors
 ↓
Pipes
 ↓
Controller
 ↓
Service
 ↓
Response
```

There are additional details in the full lifecycle, but this is the
useful interview-level explanation.

---

## 48. In what order do middleware, guards, interceptors, pipes and controllers execute?

For the request side, a useful simplified order is:

```text
Middleware
 ↓
Guards
 ↓
Interceptors
 ↓
Pipes
 ↓
Controller
```

Interceptors also wrap handler execution, so they can run logic after
the controller returns.

---

## 49. How do you create custom middleware?

Implement `NestMiddleware`.

```typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.method, req.url);
    next();
  }
}
```

Register it using the module's `configure()` method.

---

## 50. How do you create a custom Guard?

Implement `CanActivate`.

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    return !!request.user;
  }
}
```

---

## 51. How do you create a custom interceptor?

Implement `NestInterceptor`.

```typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log(`Time: ${Date.now() - start}ms`);
      }),
    );
  }
}
```

---

## 52. How do you create a custom pipe?

Implement `PipeTransform`.

```typescript
@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: string) {
    const id = Number(value);

    if (Number.isNaN(id)) {
      throw new BadRequestException("Invalid ID");
    }

    return id;
  }
}
```

---

## 53. What is `ExecutionContext`?

`ExecutionContext` provides information about the current request
execution.

It can provide:

- HTTP request
- Controller
- Handler
- RPC context
- WebSocket context

Example:

```typescript
const request = context.switchToHttp().getRequest();
```

---

## 54. What is `CallHandler`?

`CallHandler` represents the next step in the interceptor pipeline.

```typescript
next.handle();
```

returns an Observable representing the handler execution.

---

## 55. How can an interceptor execute logic before and after a controller?

Example:

```typescript
intercept(context, next) {

  console.log('Before');

  return next.handle().pipe(
    tap(() => {
      console.log('After');
    })
  );
}
```

So:

```text
Before
 ↓
Controller
 ↓
After
```

---

## 56. When would you use an interceptor?

Common scenarios:

- Request logging
- Response formatting
- Execution time measurement
- Caching
- Response serialization
- Adding metadata
- Performance monitoring

---

## 57. How do you implement request logging using an interceptor?

Capture:

```text
Request start
Request method
URL
Request ID
Response status
Execution time
```

Example:

```typescript
const start = Date.now();

return next.handle().pipe(
  tap(() => {
    console.log(Date.now() - start);
  }),
);
```

---

## 58. How do you implement response transformation?

An interceptor can transform the returned data:

```typescript
return next.handle().pipe(
  map((data) => ({
    success: true,
    data,
  })),
);
```

Response:

```json
{
  "success": true,
  "data": {}
}
```

---

## 59. How do you implement authentication using a Guard?

The Guard can use Passport/JWT to validate the access token.

```text
Request
 ↓
JWT Guard
 ↓
JWT valid?
 ├── No → 401
 └── Yes
      ↓
 Controller
```

---

## 60. How do you implement role-based authorization?

Create a decorator:

```typescript
@Roles('admin')
```

Then a RolesGuard reads that metadata using `Reflector` and compares it
with the authenticated user's roles.

---

# 🟡 4. Validation & DTO

## 61. What is a DTO?

DTO means Data Transfer Object.

It defines the structure of data transferred between the client and
server.

Example:

```typescript
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}
```

DTOs are especially useful with validation.

---

## 62. Why should we use DTOs?

DTOs provide:

- Input validation
- Type safety
- Clear API contracts
- Separation from database entities
- Better maintainability

For example, your database User entity might contain fields that should
never be accepted directly from the client.

---

## 63. What is `ValidationPipe`?

`ValidationPipe` validates incoming data against DTO validation
decorators.

Example:

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
);
```

---

## 64. How do you validate request bodies?

Create a DTO:

```typescript
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
```

Then:

```typescript
@Post()
create(@Body() dto: CreateUserDto) {}
```

---

## 65. What is `class-validator`?

It provides validation decorators.

Examples:

```typescript
@IsEmail()
@IsString()
@IsInt()
@IsOptional()
@Min()
@Max()
@IsNotEmpty()
```

---

## 66. What is `class-transformer`?

It transforms plain request objects into class instances and supports
value transformations.

It is commonly used with `ValidationPipe({ transform: true })`.

---

## 67. `whitelist` vs `forbidNonWhitelisted`?

With:

```typescript
whitelist: true;
```

unknown properties are removed.

With:

```typescript
forbidNonWhitelisted: true;
```

the request is rejected when unknown properties are present.

---

## 68. What does `transform: true` do?

It enables transformation of input values to expected types/classes.

For example, a route parameter can be transformed into a number when the
pipe is configured appropriately.

---

## 69. How do you validate nested objects?

Use:

```typescript
@ValidateNested()
@Type(() => AddressDto)
address: AddressDto;
```

This tells `class-validator` to validate the nested DTO.

---

## 70. How do you validate arrays?

For arrays:

```typescript
@IsArray()
@IsString({ each: true })
roles: string[];
```

For arrays of nested DTOs:

```typescript
@ValidateNested({ each: true })
@Type(() => ItemDto)
items: ItemDto[];
```

---

## 71. How do you create custom validation decorators?

Create a custom `class-validator` decorator using `registerDecorator()`.

Useful for business-specific validation such as:

```text
IsStrongPassword
IsUniqueEmail
IsValidCoupon
```

---

## 72. DTO vs Entity?

### DTO

Represents API input/output.

### Entity

Represents database persistence.

They should not automatically be treated as the same object because API
requirements and database requirements can differ.

---

# 🟠 5. Authentication & Authorization

## 73. How would you implement JWT authentication?

Typical flow:

```text
Login
 ↓
Validate email/password
 ↓
Generate access token
 ↓
Client sends Authorization header
 ↓
JWT Guard
 ↓
JWT Strategy
 ↓
Controller
```

Access token example:

```text
Authorization: Bearer <token>
```

---

## 74. What is Passport?

Passport is an authentication middleware ecosystem.

NestJS integrates Passport through `@nestjs/passport`.

It supports strategies such as:

- JWT
- Local username/password
- OAuth providers

---

## 75. What is `AuthGuard('jwt')`?

It invokes the configured Passport JWT strategy.

```typescript
@UseGuards(AuthGuard('jwt'))
@Get('profile')
getProfile() {}
```

If authentication succeeds, the authenticated user is generally attached
to the request.

---

## 76. What is a Passport Strategy?

A Passport strategy defines how authentication is performed.

For JWT:

```text
Extract token
 ↓
Verify token
 ↓
Validate payload
 ↓
Return user
```

---

## 77. How does `JwtStrategy` work?

It:

1.  Extracts the JWT.
2.  Verifies the token.
3.  Validates its payload.
4.  Returns the authenticated user information.

---

## 78. Where should you validate the JWT?

Usually inside the Passport JWT strategy used by an authentication
Guard.

This keeps authentication logic separate from controllers.

---

## 79. Authentication vs Authorization?

### Authentication

> Who are you?

Example:

```text
Is this JWT valid?
```

### Authorization

> What are you allowed to do?

Example:

```text
Can this user delete an order?
```

---

## 80. How would you implement RBAC?

RBAC means Role-Based Access Control.

Example roles:

```text
ADMIN
MANAGER
USER
```

A route can require:

```typescript
@Roles('admin')
```

A Guard checks whether the authenticated user has that role.

---

## 81. How would you implement permissions?

Instead of only roles, define granular permissions:

```text
user:create
user:update
order:create
order:delete
```

A user can have one or more permissions.

A Guard checks the required permission against the authenticated user's
permissions.

---

## 82. How would you create a `@Roles()` decorator?

Use `SetMetadata()`:

```typescript
export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

Then:

```typescript
@Roles('admin')
```

stores metadata that a Guard can read.

---

## 83. How does RolesGuard work?

The Guard uses `Reflector`:

```typescript
const roles = this.reflector.get("roles", context.getHandler());
```

Then it checks:

```text
Required roles
      ↓
User roles
      ↓
Allowed?
```

---

## 84. How would you implement refresh tokens?

Use:

```text
Access Token → Short-lived
Refresh Token → Longer-lived
```

When the access token expires:

```text
Client
 ↓
Refresh token
 ↓
Auth server
 ↓
New access token
```

Refresh tokens should be protected carefully and can be rotated/revoked.

---

## 85. Where should refresh tokens be stored?

A common browser approach is a secure, HTTP-only cookie.

Another approach is to store a hashed refresh-token record server-side
so it can be revoked.

Avoid exposing sensitive long-lived tokens to JavaScript unnecessarily.

---

## 86. How do you protect a specific route?

```typescript
@UseGuards(AuthGuard('jwt'))
@Get('profile')
getProfile() {}
```

Only authenticated requests can access it.

---

## 87. How do you protect an entire controller?

```typescript
@UseGuards(AuthGuard("jwt"))
@Controller("users")
export class UserController {}
```

All routes in the controller are protected unless guard behavior is
overridden.

---

# 🟠 6. Exception Handling

## 88. How does exception handling work?

NestJS has built-in exception handling.

Example:

```typescript
throw new NotFoundException("User not found");
```

The framework converts the exception into an HTTP response.

---

## 89. What is `HttpException`?

`HttpException` is the base class used to create HTTP errors.

```typescript
throw new HttpException("Something went wrong", HttpStatus.BAD_REQUEST);
```

---

## 90. What is `BadRequestException`?

It represents HTTP 400.

Use it when the client sends invalid input.

---

## 91. What is `UnauthorizedException`?

It represents HTTP 401.

Typically means:

```text
Missing/invalid authentication
```

---

## 92. What is `ForbiddenException`?

It represents HTTP 403.

The user may be authenticated but does not have sufficient permission.

---

## 93. What is `NotFoundException`?

It represents HTTP 404.

Example:

```typescript
throw new NotFoundException("User not found");
```

---

## 94. What is an Exception Filter?

An Exception Filter lets you catch exceptions and customize how errors
are returned.

It is useful for:

- Consistent API errors
- Logging
- Mapping internal errors
- Hiding sensitive implementation details

---

## 95. How do you create a global exception filter?

Create:

```typescript
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception, host) {
    // custom response
  }
}
```

Register:

```typescript
app.useGlobalFilters(new GlobalExceptionFilter());
```

---

## 96. Why create a custom exception filter?

Suppose every API should return:

```json
{
  "success": false,
  "message": "...",
  "statusCode": 400,
  "timestamp": "...",
  "path": "..."
}
```

A global filter avoids repeating this logic in every controller.

---

## 97. How would you return a consistent error response?

Use a global exception filter:

```json
{
  "success": false,
  "statusCode": 404,
  "message": "User not found",
  "timestamp": "2026-10-02T10:00:00Z",
  "path": "/users/123"
}
```

---

# 🟠 7. Database & ORM

## 98. How do you connect PostgreSQL with NestJS?

Common options include:

- TypeORM
- Prisma
- Sequelize
- node-postgres

With Prisma, for example, configure Prisma Client and inject it through
a service/provider.

---

## 99. How do you connect MongoDB with NestJS?

A common approach is Mongoose:

```typescript
MongooseModule.forRoot(process.env.MONGO_URL);
```

Then register schemas using:

```typescript
MongooseModule.forFeature(...)
```

---

## 100. TypeORM vs Prisma?

### TypeORM

- Entity-based
- Repository pattern
- Decorators
- Mature NestJS integration

### Prisma

- Generated type-safe client
- Strong developer experience
- Schema-first approach
- Excellent TypeScript support

Choice depends on team and project requirements.

---

## 101. How do you integrate Mongoose?

Configure the connection:

```typescript
MongooseModule.forRoot(process.env.MONGO_URL);
```

Register schemas:

```typescript
MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema,
  },
]);
```

Inject the model into the service.

---

## 102. How do you define schemas?

Example:

```typescript
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
```

---

## 103. How do you use repositories?

A repository abstracts database operations.

Example:

```typescript
constructor(
  @InjectRepository(User)
  private userRepository: Repository<User>
) {}
```

Then:

```typescript
this.userRepository.find();
```

---

## 104. What is `@InjectRepository()`?

It tells NestJS to inject a TypeORM repository.

```typescript
@InjectRepository(User)
private userRepository: Repository<User>
```

---

## 105. How do you handle database transactions?

A transaction ensures multiple database operations are treated as one
logical operation.

Example:

```text
Create Order
 ↓
Create Order Items
 ↓
Reduce Inventory
 ↓
COMMIT
```

If one operation fails:

```text
ROLLBACK
```

For distributed systems, a database transaction alone does not cover
external services such as Kafka or payment providers; patterns like
Outbox/Saga may be needed.

---

## 106. How do you implement pagination?

Two common approaches:

### Offset pagination

```text
page=2
limit=20
```

Simple but can become inefficient for very large datasets.

### Cursor pagination

```text
after=<cursor>
limit=20
```

Usually better for large datasets and continuously changing data.

---

## 107. How do you optimize slow database queries?

Typical steps:

1.  Check query execution plan.
2.  Add appropriate indexes.
3.  Avoid fetching unnecessary fields.
4.  Use pagination.
5.  Avoid N+1 queries.
6.  Cache frequently accessed data.
7.  Optimize joins/aggregations.
8.  Use connection pooling.

---

## 108. How do you handle database connection errors?

Use:

- Connection retry
- Connection pooling
- Timeouts
- Health checks
- Logging/monitoring
- Graceful degradation where possible

Don't blindly retry forever because it can make an outage worse.

---

## 109. How do you manage database migrations?

Migrations are version-controlled schema changes.

Example:

```text
Migration 001
Create users table

Migration 002
Add phone column

Migration 003
Create orders table
```

They allow different environments to reach a known database schema.

---

## 110. How do you implement soft deletes?

Instead of:

```sql
DELETE FROM users
```

store:

```text
deletedAt = timestamp
```

Normal queries exclude deleted records.

This is useful when data needs to be recoverable or retained for
business/audit reasons.

---

# 🔴 8. Advanced NestJS

## 111. What are lifecycle hooks?

Lifecycle hooks allow code to execute at specific stages of
application/module startup and shutdown.

Examples:

```text
OnModuleInit
OnModuleDestroy
OnApplicationBootstrap
OnApplicationShutdown
```

---

## 112. What is `OnModuleInit`?

It runs after a module has been initialized.

Useful for:

- Initialization logic
- Loading resources
- Starting internal processes

---

## 113. What is `OnModuleDestroy`?

It runs when a module is being destroyed.

Useful for:

- Closing connections
- Cleaning resources
- Stopping workers

---

## 114. What is `OnApplicationBootstrap`?

Runs after the application has finished initializing.

Useful when some initialization logic should happen only after the
application's dependencies are ready.

---

## 115. What is `OnApplicationShutdown`?

Runs during application shutdown.

Useful for graceful cleanup:

```text
Stop accepting work
 ↓
Close DB
 ↓
Close Redis
 ↓
Close Kafka connection
 ↓
Exit
```

---

## 116. What are custom decorators?

Custom decorators allow us to create reusable behavior or metadata.

Example:

```typescript
@Roles('admin')
```

or:

```typescript
@CurrentUser()
```

They make controllers cleaner and reusable.

---

## 117. How do you create a parameter decorator?

Example:

```typescript
export const CurrentUser = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return request.user;
});
```

Then:

```typescript
@Get('profile')
getProfile(@CurrentUser() user) {}
```

---

## 118. What is metadata?

Metadata is information attached to classes, methods, or parameters.

Example:

```typescript
@Roles('admin')
```

can store:

```text
roles = ['admin']
```

A Guard can later read that metadata.

---

## 119. What is `Reflector`?

`Reflector` is a NestJS utility for reading metadata.

Example:

```typescript
const roles = this.reflector.get("roles", context.getHandler());
```

This is commonly used by authorization Guards.

---

## 120. How does NestJS internally resolve dependencies?

The DI container maintains a graph of providers.

Conceptually:

```text
Controller
 ↓
UserService
 ↓
UserRepository
 ↓
Database
```

NestJS creates dependencies according to their registered providers and
injects them into constructors.

---

## 121. Singleton vs Request-scoped vs Transient?

### Singleton

One shared instance within the application/container scope.

Good for:

```text
Services
Configuration
Database clients
```

### Request-scoped

New instance for each request.

Useful when state must be isolated per request.

### Transient

New instance for each consumer that injects it.

---

## 122. When would you use request-scoped providers?

Use them when a provider needs request-specific state.

Examples:

- Request-specific context
- Request-specific logging metadata
- Tenant context

However, don't use them everywhere because they can have performance
overhead.

---

## 123. What are the performance implications of request-scoped providers?

Request-scoped providers cause more object creation and dependency
resolution per request.

In high-RPS applications, excessive use can increase:

- CPU
- Memory allocation
- Garbage collection
- Latency

Prefer singleton providers unless request-specific state is genuinely
required.

---

## 124. How do you create a reusable NestJS library?

Create a library containing:

```text
Module
Providers
Decorators
Guards
Utilities
```

Expose only the public APIs that consumers need.

Example:

```text
@company/auth
```

could provide:

```text
AuthModule
AuthGuard
CurrentUser decorator
```

---

## 125. How do you create a custom module?

Create:

```typescript
@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class PaymentModule {}
```

Keep related functionality inside the module and export only what other
modules need.

---

# 🔴 9. Microservices

## 126. What are NestJS microservices?

NestJS provides abstractions for applications that communicate using
different transports.

Examples:

- TCP
- Kafka
- RabbitMQ
- Redis
- NATS
- gRPC

This allows services to communicate without everything being direct HTTP
calls.

---

## 127. Monolith vs Microservices?

### Monolith

```text
One application
 ├── Users
 ├── Orders
 ├── Payments
 └── Notifications
```

### Microservices

```text
User Service
Order Service
Payment Service
Notification Service
```

Microservices allow independent deployment and scaling but introduce
distributed-system complexity.

---

## 128. How does NestJS communicate between microservices?

Depending on the architecture:

```text
HTTP
TCP
Kafka
RabbitMQ
gRPC
Redis
```

For event-driven architectures, Kafka or RabbitMQ are common choices.

---

## 129. What is `ClientProxy`?

`ClientProxy` is NestJS's abstraction for communicating with another
microservice.

Example:

```typescript
constructor(
  @Inject('ORDER_SERVICE')
  private readonly client: ClientProxy
) {}
```

It can send messages or events.

---

## 130. What is `@MessagePattern()`?

It handles request-response messages matching a pattern.

Example:

```typescript
@MessagePattern({ cmd: 'get_user' })
getUser(data) {
  return this.userService.find(data.id);
}
```

---

## 131. What is `@EventPattern()`?

It handles events.

Example:

```typescript
@EventPattern('order.created')
handleOrderCreated(data) {
  // process event
}
```

The producer does not necessarily wait for a response.

---

## 132. Request-response vs event-based communication?

### Request-response

```text
Service A
   ↓ request
Service B
   ↓ response
Service A
```

Service A waits for the response.

### Event-based

```text
Service A
   ↓ event
Broker
   ↓
Service B
```

Service A doesn't need to wait for Service B.

---

## 133. How do you integrate Kafka with NestJS?

Configure Kafka as a microservice transport:

```text
NestJS
 ↓
Kafka Client
 ↓
Kafka Cluster
```

Consumers use message/event handlers to process Kafka records.

Important production topics include:

- Consumer groups
- Partitions
- Replication
- Retries
- Dead-letter handling
- Idempotency

---

## 134. How do you integrate RabbitMQ with NestJS?

Configure the RMQ transport with:

- RabbitMQ host
- Queue
- Durability options

Then consume messages using NestJS message handlers.

Typical architecture:

```text
Producer
 ↓
Exchange
 ↓
Queue
 ↓
Consumer
```

---

## 135. Kafka vs RabbitMQ?

### Kafka

Best suited to:

- Event streaming
- High-throughput event pipelines
- Replayable event history
- Multiple independent consumer groups

### RabbitMQ

Best suited to:

- Message queues
- Task processing
- Routing
- Work queues
- Traditional asynchronous messaging

Neither is universally "better"; the choice depends on the workload.

---

## 136. How do you handle failed messages?

Use:

```text
Retry
 ↓
Exponential Backoff
 ↓
Dead Letter Queue/Topic
 ↓
Monitoring
```

Also make consumers idempotent because retries can result in duplicate
processing.

---

## 137. How do you implement retries?

A retry should normally have:

- Maximum attempts
- Backoff delay
- Jitter where appropriate
- Error classification

Example:

```text
Attempt 1 → immediately
Attempt 2 → 1 sec
Attempt 3 → 2 sec
Attempt 4 → 4 sec
```

Do not retry permanent errors such as invalid input indefinitely.

---

## 138. What is a Dead-Letter Queue?

A DLQ stores messages that cannot be successfully processed after
configured attempts.

```text
Main Queue
 ↓
Consumer
 ↓ failure
Retry
 ↓ failure
Retry
 ↓ failure
DLQ
```

Operations teams can inspect and replay them later if appropriate.

---

## 139. How do you handle duplicate messages?

Distributed messaging can produce duplicates.

Use:

- Idempotency keys
- Unique event IDs
- Database unique constraints
- Processed-event tables
- Idempotent business logic

Example:

```text
eventId = 123
```

Before processing, check whether event 123 was already processed.

---

## 140. What is idempotent processing?

An operation is idempotent if executing it multiple times produces the
same final business result.

Example:

```text
Set order status = PAID
```

is safer than:

```text
Increase balance by ₹100
```

if the same message might be delivered twice.

---

## 141. How do you authenticate between microservices?

Possible approaches:

- mTLS
- Service JWTs
- API keys
- Signed service tokens
- Private network + authentication

Authentication should not rely only on network location.

---

## 142. How do you handle distributed transactions?

Avoid trying to make multiple independent services participate in one
traditional database transaction.

Common patterns:

### Saga

Break a business transaction into local transactions with compensating
actions.

### Outbox

Store business data and the event in the same database transaction, then
publish the event asynchronously.

---

# 🔴 10. Performance & Scalability

## 143. How do you scale a NestJS application?

Node.js/NestJS applications can be scaled horizontally:

```text
                 Load Balancer
                 /     |     \
                /      |      \
          NestJS    NestJS    NestJS
             \        |        /
              \       |       /
                  Redis
                    |
                 Database
```

Use stateless application instances where possible.

---

## 144. How do you handle 100,000 RPS?

There is no single solution.

Typical architecture:

```text
Clients
 ↓
CDN / Load Balancer
 ↓
Multiple NestJS instances
 ↓
Redis Cache
 ↓
Database
```

For asynchronous workloads:

```text
NestJS
 ↓
Kafka
 ↓
Workers
```

Also optimize database indexes, connection pools, serialization, network
usage, and hot paths.

---

## 145. How do you use Redis with NestJS?

Redis can be used for:

- Caching
- Sessions
- Rate limiting
- Distributed locks
- Counters
- Temporary data
- Queues

Example cache flow:

```text
Request
 ↓
Redis?
 ├── Hit → return
 └── Miss
       ↓
    Database
       ↓
    Redis
```

---

## 146. How do you implement caching?

Typical cache-aside pattern:

```text
Request
 ↓
Check Redis
 ↓
Cache hit → Return
 ↓
Cache miss
 ↓
Database
 ↓
Store in Redis
 ↓
Return
```

The main challenge is cache invalidation.

---

## 147. How do you implement rate limiting?

For multiple NestJS instances, use shared state such as Redis.

Example:

```text
User
 ↓
Redis counter
 ↓
< 100 requests?
 ├── Yes → Allow
 └── No  → 429
```

A fixed window, sliding window, or token bucket can be used depending on
requirements.

---

## 148. How do you prevent memory leaks?

Common causes include:

- Unremoved event listeners
- Unbounded caches
- Long-lived references
- Timers not cleared
- Streams not closed
- Large objects retained unnecessarily

Monitor memory usage and use heap profiling when necessary.

---

## 149. How do you handle CPU-intensive tasks?

Node.js uses an event loop, so heavy CPU work can block other requests.

Move CPU-heavy work to:

- Worker Threads
- Separate worker services
- Job queues
- Dedicated compute services

---

## 150. When would you use Worker Threads?

Use Worker Threads when you have CPU-heavy JavaScript computation.

Examples:

```text
Large JSON processing
Image processing
Encryption/computation
Data transformation
```

Don't use Worker Threads simply for normal database/network I/O.

---

## 151. How do you implement background jobs?

Use a queue:

```text
HTTP Request
 ↓
Create Job
 ↓
Queue
 ↓
Worker
 ↓
Process
```

BullMQ with Redis is a common choice.

Examples:

- Email sending
- PDF generation
- Image processing
- Report generation

---

## 152. BullMQ vs RabbitMQ?

### BullMQ

- Redis-based
- Excellent for background jobs
- Delayed jobs
- Job retries
- Scheduling
- Job state

### RabbitMQ

- General message broker
- Exchanges
- Queues
- Routing
- Acknowledgements
- Multiple messaging patterns

Choose based on the problem rather than simply performance.

---

## 153. How do you optimize NestJS startup time?

Look for:

- Unnecessary modules
- Heavy initialization
- Expensive synchronous code
- Too many providers
- External calls during startup

Move non-critical work to asynchronous/background initialization when
appropriate.

---

## 154. How do you implement graceful shutdown?

Typical sequence:

```text
Receive SIGTERM
 ↓
Stop accepting new traffic
 ↓
Finish active requests
 ↓
Stop workers
 ↓
Close DB/Redis/Kafka
 ↓
Exit
```

This is important during deployments and container orchestration.

---

## 155. How do you handle database connection pooling?

Instead of opening a new database connection for every request:

```text
Request → New DB connection
```

use:

```text
Request
 ↓
Connection Pool
 ↓
Reuse connection
```

Configure pool size based on database capacity and application
concurrency.

---

## 156. How do you implement health checks?

Expose endpoints such as:

```text
GET /health
```

Check:

```text
Application
Database
Redis
Kafka
External dependencies
```

Distinguish between:

- Liveness: Is the process alive?
- Readiness: Can it safely receive traffic?

---

## 157. How do you monitor NestJS applications?

Monitor:

### Infrastructure

- CPU
- Memory
- Disk
- Network

### Application

- RPS
- Latency
- Error rate
- Throughput

### Dependencies

- Database
- Redis
- Kafka
- RabbitMQ

### Observability

- Logs
- Metrics
- Distributed traces

---

# 🔴 11. Testing

## 158. How do you unit test a NestJS service?

Use `TestingModule`:

```typescript
const module = await Test.createTestingModule({
  providers: [
    UserService,
    {
      provide: UserRepository,
      useValue: mockRepository,
    },
  ],
}).compile();
```

Then test the service independently.

---

## 159. How do you mock dependencies?

Use a custom provider:

```typescript
{
  provide: UserRepository,
  useValue: {
    find: jest.fn(),
    save: jest.fn()
  }
}
```

This prevents unit tests from depending on real external systems.

---

## 160. What is `TestingModule`?

`TestingModule` creates a NestJS-like dependency injection environment
specifically for tests.

It allows you to instantiate:

- Services
- Controllers
- Providers
- Modules

with mocked dependencies.

---

## 161. Unit testing vs Integration testing?

### Unit test

Tests one component in isolation.

```text
UserService
   ↓
Mock Repository
```

### Integration test

Tests multiple real components together.

```text
Controller
 ↓
Service
 ↓
Database
```

---

## 162. How do you test controllers?

Mock the service and verify:

- Correct service method is called
- Correct parameters are passed
- Correct response is returned
- Errors are handled correctly

---

## 163. How do you test Guards?

Mock `ExecutionContext` and test scenarios such as:

```text
Valid user → true
No user → false
Wrong role → false
Correct role → true
```

---

## 164. How do you test Interceptors?

Mock:

```text
ExecutionContext
CallHandler
```

Then verify:

- Before logic
- `next.handle()`
- After logic
- Response transformation

---

## 165. How do you test Pipes?

Call:

```typescript
pipe.transform(value, metadata);
```

Test:

```text
Valid input → transformed value
Invalid input → exception
```

---

## 166. How do you test database interactions?

For unit tests:

```text
Service
 ↓
Mock repository
```

For integration tests:

```text
Service
 ↓
Real/test database
```

Use a dedicated test database rather than production data.

---

## 167. Jest vs Supertest?

### Jest

Testing framework used for:

- Unit tests
- Assertions
- Mocking
- Test suites

### Supertest

Used to make HTTP requests against the application during
integration/e2e testing.

They are often used together.

---

## 168. How would you test an authentication flow?

Test:

```text
Login
 ↓
Credentials validation
 ↓
JWT generation
 ↓
Protected endpoint
 ↓
Valid JWT
 ↓
Success
```

Also test:

```text
Invalid password
Missing token
Expired token
Invalid token
Insufficient role
```

---

# 🔥 12. Scenario-Based Questions

## 169. Design an authentication system in NestJS.

Architecture:

```text
Client
 ↓
Auth Controller
 ↓
Auth Service
 ↓
User Repository
 ↓
Database
```

For protected APIs:

```text
Request
 ↓
JWT Guard
 ↓
JWT Strategy
 ↓
User
 ↓
Controller
```

For authorization:

```text
JWT
 ↓
RolesGuard
 ↓
Controller
```

Use short-lived access tokens and securely managed refresh tokens.

---

## 170. Design an e-commerce backend using NestJS.

Possible services:

```text
API Gateway
    |
    ├── User Service
    ├── Product Service
    ├── Order Service
    ├── Inventory Service
    ├── Payment Service
    └── Notification Service
```

Infrastructure:

```text
PostgreSQL → transactional data
Redis      → cache
Kafka      → events
Object storage → product images
```

Example order flow:

```text
Create Order
 ↓
Order Service
 ↓
Database
 ↓
OrderCreated event
 ↓
Kafka
 ├── Inventory
 ├── Payment
 └── Notification
```

---

## 171. How would you implement centralized logging?

Use structured JSON logs:

```json
{
  "timestamp": "...",
  "level": "error",
  "service": "order-service",
  "requestId": "abc-123",
  "message": "Payment failed"
}
```

Architecture:

```text
NestJS Services
 ↓
Log Agent
 ↓
OpenSearch / Elasticsearch
 ↓
Dashboard
```

A correlation/request ID should travel across services so one request
can be traced.

---

## 172. How would you handle a payment service failure?

Use multiple protection mechanisms:

```text
Payment request
 ↓
Timeout
 ↓
Retry with backoff
 ↓
Circuit breaker
 ↓
Fallback / async processing
```

For payment operations, **idempotency is critical** so retries don't
accidentally charge a customer twice.

---

## 173. How would you prevent duplicate orders?

Use an idempotency key.

Example:

```text
POST /orders
Idempotency-Key: abc-123
```

Store the key and result.

If the same request arrives again:

```text
abc-123 already processed
        ↓
Return previous result
```

Also enforce database-level uniqueness where appropriate.

---

## 174. How would you design a notification system?

```text
Order Service
      ↓
Kafka / RabbitMQ
      ↓
Notification Service
   ┌──┼────┐
   ↓  ↓    ↓
 Email SMS Push
```

Benefits:

- Notification doesn't block the order API.
- Notification failures can be retried.
- Different channels can scale independently.

---

## 175. How would you handle 1 million requests per second?

Don't try to handle all traffic with one NestJS process.

Use:

```text
                    CDN
                     ↓
               Load Balancer
              /      |      \
             ↓       ↓       ↓
         NestJS   NestJS   NestJS
             \      |      /
                  Redis
                    |
              Database Cluster
```

For asynchronous operations:

```text
NestJS
 ↓
Kafka
 ↓
Worker Services
```

Also consider:

- Database sharding/replicas
- Caching
- Connection pooling
- Horizontal scaling
- Rate limiting
- Backpressure
- CDN
- Efficient serialization

The exact architecture depends on workload and bottlenecks.

---

## 176. How would you implement distributed rate limiting?

If you have multiple NestJS instances:

```text
Request
   ↓
Instance A ─┐
Instance B ─┼──→ Redis Counter
Instance C ─┘
```

Redis provides shared state.

For example:

```text
user:123:requests = 95
```

If the limit is 100:

```text
95 → Allow
101 → Reject with 429
```

---

## 177. How would you handle a slow external API?

Use:

1.  Timeout
2.  Retry only when appropriate
3.  Exponential backoff
4.  Circuit breaker
5.  Caching
6.  Async processing if possible

Example:

```text
Your API
 ↓
External API
 ↓
Slow
 ↓
Timeout
 ↓
Circuit breaker
```

This prevents one slow dependency from consuming all your resources.

---

## 178. How would you implement a circuit breaker?

A circuit breaker usually has three states:

```text
CLOSED
 ↓ failures exceed threshold
OPEN
 ↓ wait
HALF-OPEN
 ↓ successful test
CLOSED
```

### CLOSED

Requests are allowed.

### OPEN

Requests are blocked temporarily because the dependency is unhealthy.

### HALF-OPEN

Allow a limited test request.

If successful:

```text
HALF-OPEN → CLOSED
```

If failed:

```text
HALF-OPEN → OPEN
```

---

## 179. How would you implement graceful shutdown?

Example:

```text
SIGTERM
 ↓
Stop receiving new traffic
 ↓
Finish existing requests
 ↓
Stop background workers
 ↓
Close DB connections
 ↓
Close Redis
 ↓
Close Kafka/RabbitMQ
 ↓
Exit
```

This prevents partially completed operations during deployment.

---

## 180. How would you implement zero-downtime deployment?

Use multiple application instances.

Example rolling deployment:

```text
Old version:
Instance A
Instance B
Instance C

Deploy new version:
Instance A → New
Instance B → Old
Instance C → Old

Then:
Instance B → New
Instance C → New
```

The load balancer continues routing traffic to healthy instances.

Health/readiness checks are important so traffic is not sent to an
instance before it is ready.

---

## 181. How would you monitor a NestJS production application?

Use three major observability areas:

### Logs

```text
Errors
Warnings
Request IDs
Business events
```

### Metrics

```text
RPS
Latency
Error rate
CPU
Memory
Database connections
Queue depth
```

### Traces

Track one request across services:

```text
API Gateway
 ↓
Order Service
 ↓
Payment Service
 ↓
Notification Service
```

A correlation/trace ID connects the entire request flow.

---

# ⭐ Most Important Questions to Practice First

For a backend/NestJS interview, prioritize these:

1.  Dependency Injection
2.  Custom Providers
3.  Dynamic Modules
4.  Middleware vs Guards
5.  Guards vs Interceptors
6.  NestJS Request Lifecycle
7.  DTO + ValidationPipe
8.  JWT + Passport
9.  Custom Decorators + Reflector
10. Exception Filters
11. Kafka vs RabbitMQ
12. Redis + Caching
13. Circuit Breaker + Retry
14. Outbox Pattern
15. Scaling NestJS

---

# 🎯 Recommended Interview Answer Structure

For an important NestJS question, answer in this order:

### 1. Definition

Explain what it is in one sentence.

### 2. Why?

Explain the problem it solves.

### 3. Example

Give a real backend scenario.

### 4. Implementation

Show a small NestJS example if relevant.

### Example: Guard

> A Guard decides whether a request is allowed to reach a controller. We
> commonly use Guards for authentication and authorization. For example,
> a JWT Guard validates the access token before allowing the request to
> reach the controller. In NestJS, we implement `CanActivate` or use
> Passport's `AuthGuard`.

This structure makes the answer sound natural rather than memorized.
