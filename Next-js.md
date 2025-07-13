
## What is Next.js?

Next.js is a React-based framework that provides server-side rendering (SSR), static site generation (SSG), and hybrid rendering out of the box. It is designed for building scalable and high-performance web applications.

## Key Features:

* Automatic routing

* Built-in SSR and SSG

* API routes

* Image optimization

* Incremental Static Regeneration (ISR)

## What is SSR in Next JS?

In Next.js, Server-Side Rendering (SSR) is a rendering method where the HTML of a webpage is generated on the server for each incoming request. This pre-rendered HTML is sent to the browser, along with the necessary JavaScript to make the page interactive.

## What is SSR and CSR?

* Server-Side Rendering (SSR)

  - In SSR, the server generates the complete HTML for a web page on each request. This HTML is sent to the client (browser), where it is displayed directly. JavaScript can then hydrate the page, making it interactive.

  - Renders content on the server for better SEO and faster initial load.

* Client-Side Rendering (CSR)
  - Renders content on the client-side after JavaScript loads. Used when interactivity and dynamic behavior are needed.

  - In CSR, the server sends a minimal HTML file and a JavaScript bundle to the browser. The browser executes the JavaScript, which renders the page and handles interactions dynamically.

## What are the differences between Server-Side Rendering (SSR) and Static Site Generation (SSG)?

* SSR: Generates the HTML dynamically on each request.

* SSG: Pre-generates the HTML at build time and serves the static files.

## How does the file-based routing in Next.js work?

Next.js uses the filesystem to define routes. Each file in the pages/ directory becomes a route.

## What is Incremental Static Regeneration (ISR)?

ISR allows you to update static content after deployment by regenerating the page in the background.

## What are API Routes in Next.js?

 API Routes are used to create backend api endpoints within a Next.js app. These are defined inside the pages/api/ directory.

## What is getStaticProps and getServerSideProps?

* getStaticProps: Fetches data at build time for SSG.

* getServerSideProps: Fetches data at request time for SSR.

## How does next/image optimize images?

* Automatic resizing

* Lazy loading by default

* Serving images in modern formats like WebP when supported

## What are middleware in Next.js?

Middleware in Next.js runs code logic before a request is completed. It can modify the request/response objects or redirect users.

## What are some optimization techniques available in Next.js?

* Using next/image for image optimization

* Leveraging SSR and SSG for performance

* Implementing Incremental Static Regeneration (ISR)

* Code splitting and dynamic imports using next/dynamic

* Prefetching data using Link for client-side navigation

## What is the difference between Link and a in Next.js?

* Link: Used for client-side navigation in Next.js. It prefetches the target page to improve performance.

* a: Used for normal HTML navigation, causing a full page reload.

## What is next.config.js?

next.config.js is a configuration file used to customize and extend the default Next.js behavior.

## What are static paths in Next.js?

getStaticPaths is used to define dynamic routes for SSG at build time.


## How does Next.js handle SEO?

* SSR and SSG for pre-rendered content

* Built-in support for meta tags using the next/head component

## What is the difference between page router and app router in next js?

* Pages router
  - Uses the pages/ directory.
  - Simple, automatic routing based on the file structure.
  - Simpler setup, traditional React Router-like behavior.
  - Best for simpler apps or those migrating from earlier versions of Next.js
  
* App router
  -  Uses the app/ directory.
  - Supports nested layouts, React Server Components, and more flexible routing features.
  - Advanced features like nested routes, layouts, server-side rendering by default, and more fine-grained control.
  - Ideal for larger apps or those requiring more complex layouts, nested routes, or server-side rendering.

## What are ISR ?
ISR is a main feature in nextjs used to update the static file content after the build time without rebuilding the entire app

## How does Next.js handle client-side vs server-side navigation?
Next.js uses the <Link> component for client-side navigation, which prefetches pages. Server-side navigation happens only on the initial page load or through full-page refresh.

## How do you handle redirects and rewrites in Next.js?

# Redirects 
Redirects allows you to define URL redirects that happen on the server side before rendering a page.

# Rewrites
Rewrites function allows you to rewrite the URL path on the server without redirecting the user.

# How do you secure API routes and SSR pages in Next.js?
  - Authenticate users using cookies or JWTs
  - Verify tokens inside getServerSideProps or API routes
  - Use middleware for early request validation
  - Sanitize inputs to avoid injection attacks