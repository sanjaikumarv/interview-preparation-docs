# React JS interview questions

## What is React?

React.js is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. React provides component-based approach for building UIs, allowing developers to create reusable UI components that can be composed together to build complex user interfaces.

## What is synthetic event in React ?

## What are components in React?

In React, components are reusable building blocks that define specific parts of a user interface (UI) , that helps to reduce our code.

* There is a two types of components:
 - Functional Components: A function that returns a React element.

 - Class Components: A class that extends React.Component and includes methods like render.

## What is Real DOM and Virtual DOM ? 

* Real DOM 

  - The Real DOM is the browser representation of the HTML elements in a web page

  - It is a tree-like structure where each element is represented as a node.

  - Whenever there is a change in the data or the structure of the web page, the Real DOM gets updated

* Virtual DOM

  - The Virtual DOM is a lightweight, in-memory representation of the Real DOM

  - It is a JavaScript object that mirrors the structure of the Real DOM

  - By using the Virtual DOM, React can optimize performance by reducing
    the amount of time spent on DOM operations, resulting in faster rendering and improved user experience

## React JS Key Features

* Component based architecture

* JSX

* Virtual DOM

* Life cycle methods

* Hooks

* Performance Optimization

* Declarative Syntax

## JSX in React

JavaScript allows to write HTML code directly within the JavaScript code. JSX is a key feature of React.js and is used to define the structure of React components.

## What are Props in React?

The props or propertics in React JS used to pass data from the parent component to child component .Props are read-only and cannot be modified by the child component.

## What is State in React?

* State is used to store or manage data in the component.

* When the state is updated, the component re-renders, and any changes to the state may lead to changes in the component's output

## What is the difference between State and Props?

* Props : 

  - Props used to pass data form the parent component to child component
 
  - The parent component passes data as props to its child components, 
   and the child components use the props to display or work with the data

  - The props are immutable read-only from child component
 
* State

  - State is used to store or manage data in the component.

  - It returns two arrays of functions: the initial state and a 
    setState function used to update the component's state

  - It is typically initialized in the constructor of a class component
    or using the useState hook in a functional component

## What are Hooks in React?

* React Hooks are functions that enable developers to use React features in functional components. 

* They were introduced in React 16.8 as a way to write a reusable code in React applications. 

* Hooks allow to reuse stateful logic between components without having to use class components and the lifecycle methods associated with them

## useState ?

The useState is an React hook that manages and stores data within a component. It returns two arrays of functions: the initial state and a setState function used to update the component's state.. 

## useEffect?

* The useEffect is an React hook enables you to perform side effects in functional components. 

* This function accepts two arguments: an effect function and an optional dependency array. 

* The useEffect function is executed after each component render. If we include a state value in the optional dependency array, the useEffect function will re-render when that state value changes..

## useContext ?

The Context API is used to manage state values globally in React applications. It provides a way to pass data through a component without having to pass props at every level.

## useReducer?

* The useReducer is an React hook that handle multiple state functions in react functional components. 

* It is an alternative to the useState hook and is particularly useful when the state logic becomes more involved, or when you have multiple state transitions that depend on the previous state..

## useCallBack?

* The use callback is hook that will return a memoized call back function. 

* That callbacks used for control unnecessary function renders to optimize our app performance. 

* It is useful when we passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. When we need to cash any function use useCallBack.

## useMemo?

* The use callback is hook that will return a memoized call back function. 

* That callbacks used for control unnecessary variable renders to optimize our app performance. 

* When we need cash any variables use useMemo.

## What is the use of the key prop in React?

* The key prop is used in React to uniquely identify elements in a list. 

* It helps React identify which items have changed, been added, or removed, thus optimizing the rendering process.

## What is React Router?

React Router is a standard library for routing in React applications. It allows you to handle navigation and rendering of components based on the URL path

## Prop drilling?

When we need to pass the data as props between the parent component to nested child component to access the data as props.

## How we manage global states in react? 

Can we use context api , redux, zeutand, and zotal to manage state in globally. And also we can avoide the prop drilling between component tree. 

* Context api 

  - The React Context API allows to create a context at the top level of component tree and provide a value to it. This value can be accessed by any component that is a descendant of the provider.

  - Redux that provides a predictable state container for managing the global state in our application

  - It stores the global state in a single store and allows you to dispatch actions to modify the state

## How we can improve performance of the component?

We can use react.lazy react.memo and suspence improve our react component performance

* React.Lazy

  - React.lazy allows to loading the components lazily, that reducing the initial bundle size and improving the application's load time. It can be used with Suspense component to handle loading while the lazy component is fetched.

* React.Memo

  - The react memo is used to memoizing the component for the unnecessary re-renders. They sending props values changes the component will be re-renders again.

  - That avoide these unnecessary re-renders and improve the performance of functional components 

## Why we need tailwindcss

tailwind CSS was CSS framework that provides a set of pre-built utility classes, making it easier and developers can quickly apply styles without writing custom CSS from scratch, saving time and effort

## Class vs functional component

* Class component
  - A class component requires you to extend from React. Component and create a render function that returns a React element.

  - Class components were the original way of creating components in React. They are defined as ES6 classes that extend the React.Component class.

  - It must have the render() method returning JSX 

  - Can manage state in component using constructor props

* Functional component

  - Functional components are much simpler and are written as plain JavaScript functions that return JSX

  - traditionally didn't have access to state and lifecycle features

  - Can manage state in that component using react hooks  
  
# Latest React JS interview prepration

## What are the new features introduced in React 18?

* Concurrent Rendering :
 - React 18 introduced a new concurrent rendering engine to improve the user experience by making the app more responsive

* Automatic Batching :
 - React now batches updates, making it more efficient and reducing unnecessary re-renders.

* React Server Components :
 - A new experimental feature that allows React components to be rendered on the server without sending the entire JavaScript bundle to the client.

* useId Hook : 
 - A new hook for generating unique IDs that are stable across renders

* Suspense for Data Fetching :
 - React 18 improved the Suspense feature, which allows for asynchronous data fetching.

## Explain the concept of hooks in React and give examples of some commonly used hooks

* useState : A hook to add state to functional components.

* useEffect : A hook to perform side effects in functional components, such as data fetching or subscriptions.

* useContext : A hook to access context values within the component tree.

* useReducer : A hook for managing complex state logic in functional components.

* useRef : A hook for accessing DOM elements or mutable values that persist across renders.

## What is the Virtual DOM, and how does it work?

* The Virtual DOM (VDOM) is an in-memory representation of the actual DOM. React creates a virtual DOM to improve performance by minimizing direct updates to the real DOM. React compares the virtual DOM with the actual DOM (a process called "diffing") and applies only the necessary changes, reducing costly operations.

## What is the difference between functional and class components?

* Functional Components : These are simpler and are written as JavaScript functions. They can use hooks like useState and useEffect for state and side effects.

* Class Components : These are ES6 classes that extend React.Component. They have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount for side effects and state management.

## What is the purpose of React.memo?

- React.memo is a higher-order component used to prevent unnecessary re-renders of functional components by memoizing the result. It only re-renders the component when its props change.

## What are controlled and uncontrolled components?

* Controlled Components : Components whose state is managed by React (e.g., input values are controlled via the state of the component).

* Uncontrolled Components : Components where the state is handled by the DOM itself (e.g., using refs to access input values directly).

## What is the Context API, and how do you use it? 

* The Context API allows you to share data across components without passing props manually through every level of the component tree. It consists of:

 - React.createContext(): Used to create a context.

 - Provider: A component that provides the context value to its children.

 - useContext() : A hook to consume the context value.

## Explain the React Lifecycle methods in class components.

* componentDidMount: Called after the component is mounted, often used for data fetching.

* componentDidUpdate: Called when the component updates, used for reacting to prop or state changes.

* componentWillUnmount: Called right before the component is unmounted, used for cleanup (e.g., clearing timers or canceling subscriptions).

## What is the use of useEffect hook, and how does it differ from componentDidMount and componentWillUnmount?

* useEffect is used in functional components to handle side effects like data fetching, subscriptions, or manually changing the DOM. 

* It can be configured to run after every render or only when certain dependencies change, similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

## What is componentDidMount , componentDidUpdate and componentWillUnmount in react js ? 

## What is Redux, and how does it work with React?

* Redux is a state management library that helps manage the application’s state in a predictable way. It follows the principles of a unidirectional data flow:
 
 - Store: Holds the application state.

 - Actions: Plain JavaScript objects that describe what happened.

 - Reducers: Functions that specify how the state changes based on actions.

 - Dispatch: A function that sends actions to the store.

 - useSelector: A hook for accessing data in the store.

 - useDispatch: A hook for dispatching actions.

## What is the difference between useEffect and useLayoutEffect?

* useEffect: Runs asynchronously after the DOM is painted, making it suitable for side effects like data fetching, subscriptions, and timers. 

* useLayoutEffect: Runs synchronously after all DOM mutations but before the DOM is painted. It is often used for measurements and adjustments that need to happen before the page is rendered

## What are higher-order components (HOCs)?

* Higher-order components are functions that take a component as an argument and return a new component with enhanced functionality. They are used for code reuse, such as adding authentication, logging, or styling.

## What are error boundaries in React? 

* Error boundaries are React components that catch JavaScript errors in their child components during rendering, in lifecycle methods, and in constructors of the whole tree beneath them. 

* They provide a fallback UI and help prevent the entire app from crashing.

## How do you optimize React application performance?

* Code Splitting: Using React.lazy and Suspense to load parts of the app only when needed

* Memoization: Using React.memo for functional components and useMemo and useCallback hooks to prevent unnecessary re-renders.

* Lazy Loading: Delaying the loading of images or components until they are needed

* Avoiding Inline Functions: Inline functions cause re-renders on each render cycle, use useCallback for stable function references.

## What is JSX, and how does it differ from HTML?

* JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It is used to define UI components in React. Unlike HTML, JSX allows embedding JavaScript expressions and requires some additional rules, such as className instead of class for defining CSS classes.
