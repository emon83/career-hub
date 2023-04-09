import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="bg-green-100 mt-16 py-12">
      <div className="blog__section">
        <h1 className="text-4xl font-bold text-center pt-10 pb-2 lg:pb-6">
          Frequently Asked Question
        </h1>
        <div className="mx-6 lg:mx-12 my-10 pb-6">
        <h2 className="text-2xl font-bold mb-">Q:1. When use Context API in react?</h2>
          <p className="font-semibold mb-8 mt-2">
          The Context API in React is used when you want to pass data down the component tree without having to pass props down through every level of the tree. <br />
          Context API provides a way to share data across multiple components in a React application without having to pass the data down explicitly through props. This can be especially useful when you have a large or complex component tree with many levels of nesting. <br />
          Context API allows you to create a Context object, which can be used to store and share data across multiple components. 
          </p>

        <h2 className="text-2xl font-bold mb-">Q:2. What is Custom Hook?</h2>
          <p className="font-semibold mb-8 mt-2">
          A custom hook is a function that allows you to reuse stateful logic in functional components. You can write your own custom hook that encapsulates complex logic, and use it in multiple components that need the same functionality. It's a way to simplify your code and make it more reusable. <br />
          Custom hooks are a way to extract reusable code from components that share similar functionality, and can be used to handle things like state management, side effects, or encapsulating complex logic. <br />
          To create a custom hook, you can simply write a function that uses hooks inside of it, just like you would in a regular functional component. You can then use that custom hook in any functional component that needs the same functionality.
          </p>

        <h2 className="text-2xl font-bold mb-">Q:3. What is useRef in react?</h2>
          <p className="font-semibold mb-8 mt-2">
          useRef is a hook in React that allows you to create a reference to a DOM element or a value that persists across re-renders of a component.  <br />
          Using the useRef hook, you can create a mutable reference to a DOM element, which can then be used to access or modify the element directly. This can be useful for things like focusing an input field, animating an element, or accessing the value of an input element. <br />
          The useRef hook can also be used to store a value that persists across re-renders of a component. This is useful when you need to store some data that is not related to the component state, and should not trigger a re-render when it changes.
          </p>

        <h2 className="text-2xl font-bold mb-">Q:4. What is useMemo in react?</h2>
          <p className="font-semibold mb-8 mt-2">
          In React, useMemo is a hook that allows you to memoize a function's return value, preventing unnecessary recalculations when the component re-renders.  <br />
          useMemo takes two arguments - a function that returns a value, and an array of dependencies. The function is only re-executed if one of the dependencies changes. If none of the dependencies change, useMemo returns the previously calculated value. <br />
          This can be useful for expensive calculations or operations that depend on a set of inputs that may not change very often. By memoizing the calculation with useMemo, you can avoid performing the same calculation over and over again on every render.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
