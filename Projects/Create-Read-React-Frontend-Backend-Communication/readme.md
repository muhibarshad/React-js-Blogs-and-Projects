
<div align="center">
  <img src="Screenshot from 2023-01-14 18-35-59.png">
</div>

# React Movie Tracker (Firebase Backend)

## I developed this project without the help of an instructor.
A react app to `GET` and `POST` requests, connecting to databse(firebase)

## Features

- Add movie description to database
- Retrieve Data from the database
- Frontend-Backend Communication

## Getting Started

To get started, clone the repository and `install` the dependencies:

```sh

git clone https://github.com/muhib7353/React-js-Blogs-and-Projects.git
cd Projects
cd Create-Read-React-Frontend-Backend-Communication
npm install
```

Then, you can start the development server with the following command:

```sh
npm start
```

This will start the development server and open the app in your default web browser. The app will automatically reload whenever you make changes to the code.

## For Production

npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. For more information see the production build section.

For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest

```sh
npm install -g serve
serve -s build
```
