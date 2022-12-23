# React.js-Complete-Tips_and_Guidance

### Author: [MUHIB ARSHAD](https://github.com/muhib7353)

## Why we need react.js ?

In traditional javscript, we see every piece of tag and its functionality can be written manually.And in Large Applications like Netflix, we don't have to fetch every HTML file on requesting.We want nice transitions without any fetching and loading files.
React has the custom HTML components.Each component can be written in a declative way rather than imperative.

## What are SPAs?

React js make web application as a single page application.Means on every click on the link it does not fetch any new html file to render them on the screenn it can actually change teh javascript code to what now visilbe on the screen.Only initial request can be done on the server, then there is no any second request can be done.

## Difference between react.js , vue.js and angular.js?

React is component based.Depends upon the community libraries for the more features.
Angular is also the component based.But it is very least depends upon the third party libraries.USes Typescript.
Vue.js is also the comonent based it is mid between React and Angular.

## What are the components in the React?

- Components are actually the combination of 40% HTML, 40% Javascript and 20% some CSS.
- These are used for reusebility.
- Build your own Components(HTML TAGS)
- Its just a Javascript function returning some JSX.

## What are JSX?

Javascript XML is actually the HTML written in the JS file , all the HTML at the end is XMl.In other word we can say that this is only the sugar coated over the HTML tags.You can see the actuall deep level behinf the code in the main.js file of source through developer tools.

- In JSX components there must be returnig only one root element not the multiple root elements.
- This is actually not the HTML, this is developed by the react team to look like the HTML ,if you hav eto add the classes then add it like as the `className="dummy"`.

## How React code actually loads behind the scenes?

There is only one `index.html` file in the public folder.Thats is only loaded , because React is a single page working library.This file contains a root `<div>` element.This root element than can be used in the `index.js` file in the `src` folder which javascript is only loaded when the appliaction loads.This file render the `<App>` componnet (The root of all the components). In the `App.js` file this conatins the all attached componets to the `App` component from the components folder.

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
