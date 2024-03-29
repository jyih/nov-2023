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

## Relationships in Sequelize

To tell Sequelize that a column is a FK, we need to add a couple properties to that column obj

```js
references: {
model: <table name>,
key: 'id' (not needed unless PK is something besides id)
},
onDelete: 'CASCADE' (if desired)
```

Next we have to connect our models, and this is done by using Associations

- Associations
- One to One
- hasOne - not used much
- One to Many
- belongsTo
- hasMany

We have to determine which is which and the order does matter

The model with the FK is the belongsTo

```js
<model we are in>.<relationship>(models.<name of the model we are connecting to>, {
    foreignKey: <name of the FK being used to connect>
})
```

```
Demonstrate what the SQL for the JOIN ON would look like on both sides
```

In order to CASCADE Delete, we need to add some additional stuff to the hasMany

- `onDelete: 'CASCADE'`,
- `hooks: true`

The `hooks: true` enforces that the deletions occur in the right order. If this is left off, we can still run into the Foreign Key Constraint Failed errors

### Many to Many

```js
belongsToMany(models.<name of the model on other side of joins table>, {
    through: models.<name of model for join table>,
    foreignKey: <FK to join to join table>,
    otherKey: <FK to join from join table to other table>
})
```

## Implementing these relationships in our Express

```
\*\* Create a route to do a getAll with the relationship
```

In our query object, we need to add an include property that points to the model we want to join.

Since we are referencing another model, we need to make sure and add that model to our imports.

```js
include: <model name>
```

We can also add multiple models to the join by pointing the include property to an array

```js
include: [<model 1>, <model 2>]
```

We can also point include to an object or an array of objects

```js
include: {
    model: <model name>
}
```

```
\*\* Talk about including attributes and where properties to our include object
```

We can also have nested includes

If we don't want any of the info from our join table, we can add a through property to one of our includes objects. That through property will also point to an object with attributes: []

```js
include: {
    model: <model name>,
    through: {
        attributes: []
    }
}
```
