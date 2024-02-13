# Getting Started With Sequelize

Starting with a basic server

```js
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
```

Packages needed for set up that we have already seen

- `express`
- `sqlite3`
- `dotenv`

Dev dependencies

- `nodemon` (not necessary, but useful)
- `dotenv-cli` (needed to work with sequelize commands when connecting to DB)

To start off, we have to install a couple packages

- `npm install sequelize`
- `npm install sequelize-cli`

Then we initialize Sequelize

- `npx sequelize init`

This command creates a bunch of folders and files for us

- We will be replacing the entirety of the config.json file
- We will not be touching the models/index.json file. This file bundles up all of the stuff that Sequelize needs and exports it as the db variable.

- The migrations file's job is to make changes to our DB
- Seeders files are filled with our initial DB data
- Model files are class representations of our tables

```js
// ** Create a .sequelizerc file and add to it:
const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};

// ** Delete everything in the config/database.js file and replace with:
module.exports = {
  development: {
    storage: process.env.DB_FILE, // location of DB file
    dialect: "sqlite", // specify RDBMS
    seederStorage: "sequelize",
    benchmark: true, // prints execution time to terminal
    logQueryParameters: true, // logs SQL query parameters to the terminal
    typeValidation: true, // model-level data type validation
    // logging: false // prints SQL to terminal unless set to false
  },
};
```

- storage: Tells Sequelize where our actual DB is
- dialect: Tells Sequelize which RDBMS we are using
- benchmark: Basically just turns .timer on by default
- logQueryParameters: Allows us to actually see the values when we make changes to our DB
- typeValidation: Helps us enforce data types on our tables
- logging: Defaults to true and prints our SQL to the terminal

## Migrations

- For making changes to the DB structure
- Table names = Capitalized and Plural
  - Table: Users
- CLI commands: \*\* Can add -cli to the sequelize command, but not needed
  - `npx sequelize migration:generate --name <create-name-of-table>`
    - Generate a new migration file
  - `npx dotenv sequelize db:migrate`
    - Run all migration files that haven't been ran
  - `npx dotenv sequelize db:migrate:undo`
    - Rolls back the most recent migration
  - `npx dotenv sequelize db:migrate:undo:all`
    - Rolls back all migrations

Important notes

- Anytime we are running a command to interact with our db, we need Sequelize to
  see our environment variables, so we have to add the "dotenv"
- Every migration file we create has 2 parts: an "up" and a "down"
  - The "down" should always directly undo the "up"
- Migrations don't only create/edit our tables, they also act as version control for our DB
- All of our normal conditions like unique or not null are represented as key-value pairs in the column objects

The Sequelize Meta table's job is to track the migration files that have been executed

## Models

- Class representations of each table, with built-in query methods
- Model names = Capitalized and SINGULAR
  - Model: User
- CLI commands:
  - `npx sequelize model:generate --name <name> --attributes <table attributes>`

Important notes

- We do not have to add an "id" attribute. Sequelize will add that for us for models that we generate.
- We will be switching from snake_case to camelCase for our column names
- Make sure that any changes we make to migrations, such as adding constraints, we need to add those changes to the model as well
- Making changes to our model does not mean we need to run any additional commands

## Seeders

- For inserting starter data into tables

- There are 2 types of commands:
  - Commands that create files
  - Commands that interact with the db
    These require us to add "dotenv" to the command

Now that we have created a table, we need to create a seeder file

CLI commands:

- `npx sequelize seed:generate --name <name>`
- `npx dotenv sequelize db:seed:all`
  - Runs all seeders that haven't been ran
- `npx dotenv sequelize db:seed:undo`
  - Rolls back the most recent seed file
- `npx dotenv sequelize db:seed:undo:all`
  - Rolls back all seeder files

## Important notes

The seeder bulkInsert method tests against table constraints, but not against
the model constraints

queryInterface is an object built into Sequelize and has a ton of built-in methods

One thing that will help you out with Sequelize is envisioning the SQL that
Sequelize will be creating

The seederStorage property in our config/database.js file is what gives us the
SequelizeData file in our DB

Database reset script:

```js
    "dbreset": "npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all"
```

```
    ** Look up Sequelize validators on Google
        https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#validators
    ** Add some validators to the model
```

If we want our seeders to check against our model validations, we have to take a couple extra steps

We will be utilizing our model's built-in bulkCreate method

```js
// Instead of bulkInsert like below, we will replace with bulkCreate
// Insert into People using queryInterface.bulkInsert:
await queryInterface.bulkInsert(
  "People",
  [
    {
      name: "John Doe",
      isBetaMember: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  {}
);

// First we need to import our model into the seed file:

// Insert into People using Person.bulkCreate:
const { Person } = require("../db/models");

// Then set up a bulkCreate statement

await Person.bulkCreate(
  [
    {
      name: "John Doe",
      isBetaMember: false,
    },
  ],
  { validate: true }
);

// will throw an error from model-validation:
await Person.bulkCreate(
  [
    {
      name: "John Doe",
      isBetaMember: "yes",
    },
  ],
  { validate: true }
);
```

```js
    await <model>.bulkCreate({
        <seeders>
    }, { validate: true })
```

**`bulkCreate` instead of `bulkInsert` is highly recommended**

```
** A statment that has helped some students in the past:
    All squares are rectangles, but not all rectangles are squares. Everything in our migrations goes into our model, but not everything in our model goes into migrations.
```
