<div align="center">
  <img src="react-js-logo-no.jpg">
</div>
<br>
<h1 align="center" style="font-size: 80px;" > React.js-Complete-Tips_and_Guidance 👋</h1>

<br>

![GitHub top language](https://img.shields.io/github/languages/top/muhib7353/React.js-Complete-Tips_and_Guidance?logo=c%2B%2B&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/muhib7353/React.js-Complete-Tips_and_Guidance)
![GitHub](https://img.shields.io/github/license/muhib7353/React.js-Complete-Tips_and_Guidance)
![GitHub followers](https://img.shields.io/github/followers/muhib7353?logo=Github&style=flat-square)
![GitHub User's stars](https://img.shields.io/github/stars/muhib7353?logo=Github&style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/muhib7353/Salik-Bank-Limited?logo=git)
![GitHub last commit](https://img.shields.io/github/last-commit/muhib7353/React.js-Complete-Tips_and_Guidance?logo=git)
![GitHub language count](https://img.shields.io/github/languages/count/muhib7353/React.js-Complete-Tips_and_Guidance?logo=c%2B%2B)

## "During my learning process of React, I developed all the projects and wrote concepts under the guidance of my highly knowledgeable instructor [Academind](https://github.com/academind/react-complete-guide-code). My instructor provided all of the ideas and some source files for these projects."

### Author: [MUHIB ARSHAD](https://github.com/muhib7353)

## Why we need react.js ?

"In traditional JavaScript, we would have to manually write every piece of HTML tag and its corresponding functionality. However, in large applications like Netflix, we want smooth transitions without having to fetch and load new HTML files every time a user makes a request. To solve this problem, React introduces custom HTML components. These components can be written in a declarative rather than imperative style, allowing us to create reusable and modular code for our application."

## What are SPAs?

"React JS allows us to build single page applications (SPAs). This means that when a user clicks on a link, rather than fetching a new HTML file from the server, React can dynamically update the JavaScript code to change what is displayed on the screen. Only the initial request needs to be made to the server, and subsequent actions do not require additional requests to be made."

## Difference between react.js , vue.js and angular.js?

"React is a component-based framework that relies on community libraries to provide additional features. Angular is also component-based, but it has a larger feature set built into the framework itself and uses TypeScript. Vue.js is a component-based framework that falls somewhere in between React and Angular in terms of its reliance on external libraries and features."

## What are the components in the React?

"Components in React typically consist of a combination of HTML, JavaScript, and CSS. These components are designed for reuse and can be built from scratch or created by combining other components. They are essentially just JavaScript functions that return JSX, which is a syntax extension of JavaScript that allows you to write HTML-like code in your JavaScript files. Components are useful for creating modular and reusable code, and they can be an important tool for building and maintaining large applications."

## What are JSX?

"JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is essentially just HTML written in a JS file, and all the HTML is ultimately converted to XML. In other words, JSX is a sugar-coated version of HTML tags. You can see the underlying code in the main.js file through developer tools.

In JSX components, there must be only one root element returned, not multiple root elements. It is important to note that JSX is not actually HTML, but rather a syntax developed by the React team to resemble HTML. If you need to add classes, you should use the className attribute instead of the class attribute."

## How React code actually loads behind the scenes?

"In a React application, there is typically only one index.html file located in the public folder. This file is the only one that is loaded because React is a single page application. The index.html file contains a root <div> element, which can be accessed in the index.js file located in the src folder. This JavaScript file is only loaded when the application is initially loaded and it renders the <App> component, which serves as the root of all the other components in the application. The App.js file contains the code for the App component and any other components that are attached to it. These components are typically located in a separate components folder."

### How actually it works behind the scenes?

Behind the scenes, React uses a system called the "virtual DOM" to efficiently update the DOM and minimize the number of actual DOM manipulations that need to be performed. When the state of a component changes, React will compare the virtual DOM representation of the updated component to the previous version, and only make the necessary changes to the actual DOM.

## To start a project

- Go to the folder
- Open the terminal in that folder
- Run these commands

```sh
npm init react-app my-app
cd my-app
npm start
```

## Components of a Component

- Make a component >> src >> components
- add css file by just importing
- function name as a component name
- function also contains a paramter object of pros
- function can also contains some logic
- contain a function return some JSX
- use className=""
- use javascript in JSX as a {}
- Add aslo nested components(pass props.-- into its custom attribute)
- JSX returing wrapper element never be a Component (Build Custom Wrapper Components) for this.

```js
import React from "react";

function Message(props) {
  return <p>{props.text}</p>;
}
```

## What is state in the react and What is the stateHook?

useState is a hook in React that allows you to add state to functional components. Prior to the introduction of hooks, only class-based components could have state.

Here's an example of how you might use useState in a functional component:

```js
import { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, we are using useState to create a state variable called count and a function called setCount that allows us to update the value of count. The initial value of count is passed as an argument to useState, which in this case is 0.

When the button is clicked, the setCount function is called with the new value for count, which is the current value of count plus 1. This causes the component to re-render and the new value of count is displayed.

Behind the scenes, useState is implemented using a concept called a "state hook." When the component is rendered, the state hook function creates a piece of state and a function for updating that state, and stores them in an array. The array destructuring syntax (const [count, setCount] = useState(0)) is used to extract the current value of the state (count) and the function for updating it (setCount) from the array.

You can use useState multiple times in a single component to create multiple pieces of state. For example:

```js
import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Your name is {name}</p>
      <button onClick={() => setName("Bob")}>Change name</button>
    </div>
  );
}
```

## How we can add Two-Way Binding in react.js ?

Two-way binding in React allows you to synchronize the value of a form element with the state of a component. This is often useful when you want to ensure that the user's input is valid and up-to-date.

Here is an example of how to implement two-way binding in a React component:

```js
import React, { useState } from "react";

function MyForm() {
  // Declare a state variable and set its initial value to the empty string
  const [value, setValue] = useState("");

  // Handle changes to the input element
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <input value={value} onChange={handleChange} />
    </form>
  );
}
```

In this example, we use the useState hook to create a state variable called value and a function called setValue to update it. The input element's value attribute is set to the current value of value, and the onChange event handler is used to update value when the user types into the input.

This creates a two-way binding between the input element and the component's state, allowing the value of the input to be automatically updated as the user types, and the input to be automatically updated when the value of value changes.

You can also use two-way binding with other form elements, such as textareas and select elements. Simply set the value attribute and use an onChange event handler to update the component's state.

## How we can move data from Child-to-Parent Component Communication (Bottom-up) in React.js?

Passing a callback function as a prop: You can pass a callback function as a prop to the child component, and have the child component invoke the callback function when it needs to communicate with the parent. For example:

```js
// Parent component
function Parent() {
  const handleDataFromChild = (data) => {
    // Do something with the data from the child component
  };

  return <Child onDataFromChild={handleDataFromChild} />;
}

// Child component
function Child(props) {
  const sendDataToParent = () => {
    props.onDataFromChild("Some data");
  };

  return <button onClick={sendDataToParent}>Send data to parent</button>;
}
```

In this example, the Parent component renders the Child component and passes a callback function called handleDataFromChild as a prop to the child. The Child component has a button that, when clicked, invokes the sendDataToParent function, which in turn calls the onDataFromChild callback function with some data as an argument. This causes the handleDataFromChild function in the parent component to be executed, and the data from the child is passed to the parent.

This is a simple and effective way to move data from a child component to a parent component, but it can become cumbersome if you need to pass data from multiple children to the same parent, or if you need to pass data from a deeply nested child to a parent that is several levels up the component tree. In these cases, you might want to consider using a state management library or the context API.

## How we can achieve the lifting The State Up ?

"Lifting the state up" is a technique for managing state in a React application that involves moving shared state from a child component to a parent component. This is often useful when multiple child components need to access and modify the same piece of state, as it allows you to avoid having to pass the state down the component tree as props.

Here's an example of how to lift the state up:

```js
import React, { useState } from "react";

function Parent() {
  // Declare a state variable and set its initial value
  const [value, setValue] = useState("");

  // Pass the state and setter function down as props to the children
  return (
    <div>
      <Child value={value} setValue={setValue} />
      <Sibling value={value} setValue={setValue} />
    </div>
  );
}

function Child(props) {
  return (
    <input
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
    />
  );
}

function Sibling(props) {
  return <p>{props.value}</p>;
}
```

In this example, the Parent component has a state variable called value that is shared by the Child and Sibling components. The Parent component passes the value and setValue functions down as props to the children, allowing them to both access and modify the shared state.

By lifting the state up to the parent component, we can avoid having to pass the state down the component tree as props, and we can easily manage the shared state in one place.

It's important to note that, while lifting the state up can be a useful technique for managing state, it can also lead to a deeper component tree and make it more difficult to understand the flow of data in your application. It's a good idea to carefully consider whether lifting the state up is the right approach for your use case.

# 🤝 Contributing

"Feel free to contribute to this repository. If you want to add new features or resolve any issues, you can fork the repository and make changes to the code. If you only want to make changes to the file, you can create a pull request to the master branch. I will review it and, if it meets the necessary requirements, I will merge it into the branch. The same process applies for changes to the main branch as well."

# About me

### 👨‍💻 Muhib Arshad

   <div align="center">
<p align="center">Let's connect!</p>

<a href="https://www.linkedin.com/in/muhib-arshad-85439b242/" target="blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

<a href="https://medium.com/@muhibarshad123" target="blank">
    <img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" />
</a>

<a href="https://stackoverflow.com/users/18215817/muhib-arshad?tab=profile" target="blank">
    <img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" />
</a>

<a href = "https://twitter.com/muhib7353" target="blank">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>

<a href="https://www.facebook.com/muhib7353/" target="blank">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
</a>

<a href="https://www.instagram.com/muhib7353/" target="blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
</a>

</div>

## Show your support

If this project was helpful to you, please consider giving it a ⭐️.
You can also follow my GitHub profile to stay updated on my latest projects:
<a href="https://github.com/muhib7353" target="blank">
@muhib7353
</a>

## 📝 License

Copyright © 2022 [Muhib Arshad](https://github.com/muhib7353).

This project is [MIT](https://github.com/muhib7353/React.js-Complete-Tips_and_Guidance/blob/main/License.md) licensed.
