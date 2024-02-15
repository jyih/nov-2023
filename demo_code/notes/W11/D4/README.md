# Association Methods and Aggregate Data

## Association Methods

## Getter method

- After querying a table, we automatically get a method to get a related table's info
- For example:

  - `let album = await Album.findByPk(1);`
  - `let songs = await album.getSongs();`

- Getter method will be either plural or singular based on the relationship

- Basically exists to enable lazy loading

## Create Method

- After querying a table, we can create a record for a related table
- We don't need to add the value for the FK
- For example:

```js
    let album = await Album.findByPk(1);
    let song = await album.createSong({
        name: 'New Song'
        band: 'Cool Band'
    });
```

## Add Method

- In a Many to Many relationship, allows us to add a record to the joins table
- For example:
  - `let album = await Album.findByPk(1);`
  - `await album.addGenre(3)`

## Aggregate Functions

Our recommendation is to stick to basic, class-level aggregate functions and JS
We want to LAZY LOAD OUR AGGREGATE DATA

### Min/Max

- `await <model>.<func>(<col>)`

### Count

- `await <model>.count()`

- Can also be achieved by finding the length of the return from `<model>.findAll()`

### Sum

- `await <model>.sum(<col>)`

Avg can be calculated by writing simple JS combining these methods

We can also take in an obj to specify a WHERE clause

- `await <model>.<func>(<col>, { where: <filter> })`

We can use the `<instance>.toJSON()` method to turn the result from a query into a JSON object instead of a promise

This allows us to lazy load our aggregate data then add it to the return from a data query

This is useful for the project!!
