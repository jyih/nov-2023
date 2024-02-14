# Querying With Express & Sequelize

There are a variety of query methods built into our models

- findAll
  - Useful when we want multiple records
  - Always returns an array
- findOne
  - Useful when we want to find just a single record
- findByPk
  - Also useful when finding just a single record - Basically a findOne, but shortcuts to searching via Primary Key

To use these methods, we have to follow a couple steps

1. Import the model into the router file
2. Dispatch the method on the model, setting the return to a variable
3. Make sure that we await this fetch

Remember that all of the queries we write in Sequelize get turned into SQL

We can see this in the terminal

By default, Sequelize will do `SELECT *`

If we want to select certain columns, we need to add something to our query

All of the queries take in an object

We can add the attributes property to select certain columns

The attributes property takes in an array of the cols we want

To add a WHERE statement, we add a where property to the query that takes in a nested object that has a key of the column and value of what we want to look for

If we target a column that isn't UNIQUE, it will add LIMIT 1 to the SQL

In a .findByPk, the first arg is not an obj, but instead the PK

If we want to add ORDER BY, that is another option in our query object
`order: [[<col>, 'DESC']]`

Note that the arg for order is a 2D array

We can order by multiple columns by adding more inner arrays

If we want to use LIKE in our query, we can do so
