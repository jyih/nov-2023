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
