# React.js-Complete-Tips_and_Guidance

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
