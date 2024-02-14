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

```js
router.get("/", async (req, res) => {
  const array = await <model>.findAll();

  res.json(array);
});
```

Remember that all of the queries we write in Sequelize get turned into SQL

```
const users = await User.findAll(); = SELECT * FROM Users;
```

We can see this in the terminal

By default, Sequelize will do `SELECT *`

If we want to select certain columns, we need to add something to our query

All of the queries take in an object

We can add the attributes property to select certain columns

```js
router.get("/attributes", async (req, res) => {
  const array = await <model>.findAll({
    attributes: ["col1", "col2"],
  });

  res.json(array);
});
```

The attributes property takes in an array of the cols we want

To add a WHERE statement, we add a where property to the query that takes in a nested object that has a key of the column and value of what we want to look for

```js
router.get("/where", async (req, res) => {
  const array = await <model>.findAll({
    attributes: ["col1", "col2"],
    where: {
      <column>: <value>,
    },
  });

  res.json(array);
});
```

If we target a column that isn't UNIQUE, it will add LIMIT 1 to the SQL

```js
router.get("/find-one/:name", async (req, res) => {
  const name = req.params.name;

  const <record> = await <model>.findOne({
    where: {
      name: name,
    },
  });

  res.json(<record>);
});
```

In a .findByPk, the first arg is not an obj, but instead the PK

```js
router.get("/find-by-pk/:id", async (req, res) => {
  const id = req.params.id;

  const <record> = await <model>.findByPk(id);

  res.json(<record>);
});
```

If we want to add ORDER BY, that is another option in our query object
`order: [[<col>, 'DESC']]`

```js
router.get("/order", async (req, res) => {
  const <records> = await <model>.findAll({
    order: [
      ["col1", "DESC"],
      ["col2", "ASC"],
    ],
  });

  res.json(<records>);
});
```

Note that the arg for order is a 2D array

We can order by multiple columns by adding more inner arrays

If we want to use LIKE in our query, we can do so using the sequelize.Op package

## Build/Create

Build is used for creating records. It consists of a few steps

- Build
- Validate (optional)
- Save

Create

- Does all of the other 3

We have to destructure our req.body

```
const {col1, col2 col3, etc...} = req.body;
```

To use build:

```js
const <instance> = <model>.build({<data>})
await <instance>.validate()
await <instance>.save()

    res.json(<instance>)
```

To use create:

```js
await <instance> = <model>.create({<data>})

    res.json(<instance>)
```

## Updating/Deleting in Sequelize

There are multiple ways to Update:

`<model>.update` - NOT recommended due to us running into a lot of issues with this method

This requires a where Object property reassignment

Major preference and what we will be using

- Instance.save()
- Instance.update()

We want to make sure that we are not accidentally updating our properties to undefined

This is done by checking the parts of the req.body to make sure they exist before updating

There are multiple ways to Delete:

`<model>.destroy()` - NOT recommended for the same reasons as update

`<instance>.destroy()`
