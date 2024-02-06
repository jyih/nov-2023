# Middleware, Error Handlers, & Environment Variables

- Today we talk primarily about middleware

- Express is really just two things

  - A router
  - Middleware

- We are actually going to demo 3 version of this next middleware

  - Works as intended. Mutually exclusive. We are checking for a 'stuff' property

  ```js
  const checkUserInput1 = (req, res, next) => {
    req.body.stuff = "stuff";
    if (req.body.stuff) {
      next();
    } else {
      res.send("Please include a stuff property");
    }
  };
  ```

  - Flip the conditional logic. Still mutually exclusive, and still work

  ```javascript
  const checkUserInput2 = (req, res, next) => {
    if (!req.body.stuff) {
      res.send("Please include a stuff property");
    } else {
      next();
    }
  };
  ```

  - NOT mutually exclusive. This one will lead to an error with the headers being set after a response
    is already sent. This is caused by us sending the error response, then still hitting next and going into a route where we try and send
    another response.

  ```javascript
  const checkUserInput3 = (req, res, next) => {
    if (!req.body.stuff) {
      res.send("Please include a stuff property");
    }
    next();
  };
  ```

- `app.use` is explicitly used for middleware
  The path string is not needed, but can be useful.The path does not have to match. The beginning of the path must match the prefix path added to the app.use. !Important to note that the prefix is ignored in the path that is passed into the middleware

```javascript
app.use((req, res, next) => {
  console.log("error test");
  const error = "There was an error :(";
  next(error);
});
```

- When anything is passed into next, Express behavior changes a lot
  - Express will skip all other middleware until it finds one that takes in a 4th param (error)
  - !Important to note that the order of the params matters (err, req, res, next)
    - To handle the error being passed, we have to create a way to catch that error Express also assumes that a route handler isn't meant to take in an error
    - This means that even if the route handler has 4 params and matches the path, Express will not enter that endpoint.

## Error Handling Middleware

- Takes in 4th arg (err) must be in 1st position
- Generally at the end of the pipeline so that nothing is skipped and it can catch all errors.

```javascript
app.use((req, res, next) => {
  console.log("error test");
  const error = new Error("There was an error");
  error.statusCode = 401;
  next(error);
});
```

- Anytime we generate a new error, we need to add a statusCode property to that error
  -We also have to set the res status code in our error-handling middleware
- !Note that we use `res.status(<status code>)` instead of `res.status = <status code>`

```javascript
app.use((err, req, res, next) => {
  console.log(err.message);
  const status = err.statusCode || 500;
  res.status(status);
  res.json({
    message: err.message || "Something went wrong...",
    status,
  });
});
```

- Why should we go through all of this work in the error handling middleware, rather than in the routes themselve?

  - SRP/DRY
  - Readability

- How can we handle a 404?

## Routers

- An extension of the `app` object

```javascript
const express = require("express"); // still need to import express
const router = express.Router(); // This is the object that has all of our methods
```

- router object behaves like the app obj in many ways, but not all

- for example, the router object cannot listen to a port, but it still has all of our methods

### Create a basic get route

- Now we need to attach this router to our app

- First we need to export the router

`module.exports = router`
-Then we need to import that router into our app.js file

`const routerName = require('./routes/router')`

- Finally we have to tell Express to use that router

`app.use(<path>, routerName)`

- Optionally, we can add a prefix string to the app.use to ensure that only related requests hit the router

## Environment Variables

There are a few common environments we will work in

1. Production
2. Development (dev)
3. Testing - underutilized

- A way to mimic the production environment locally so that we can test changes without interferring with user experience.

- What's the point?

- They are used to obscure sensitive data

- A few ways to setup our environment variables

- Add code to a route that allows us to see the environment variable.
  - Something like `console.log(process.env.MESSAGE)`

-Through the CLI

`MESSAGE="hello there" node app.js`

- This can be really annoying to type out every time Adding them to our script in package.json

- Update start command to be: MESSAGE=wassup node app.js

  - This defeats the purpose since we are pushing our package.json to github

-Creating a .env file

    - !! We must add .env file to our .gitignore

- To access variables in our .env from our app, we have to install a couple npm packages

`npm install dotenv` - `npm install dotenv-cli` (This allows us to access .env from CLI)

- Next we need to add some boilerplate code to our app.js
  `require('dotenv').config()`

- It's important that this is at the top of the file so that every aspect of our app has access to our env variables

- We have to make sure that our .env file is on the same level as our package.json file in the file structure

- Env variables that have a value that is longer than a single word need "" if they are in the CLI, but not if they are in the .env file
