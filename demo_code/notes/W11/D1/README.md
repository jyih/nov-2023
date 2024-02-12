# Efficiency With SQL

What make SQL inefficient?

- Large data sets
  - w/o indexing SQL will check every single row
- Too many connections to the db

What can we do to improve efficiency?

- Index
- Use joins and subqueries
  - This reduces the number of db connections
- Batch queries later on to reduce connection
- SELECT only the data that we need
- Benchmarking
- Search by unique columns

What is the syntax for creating an index?

- `CREATE INDEX <index_name> ON <table_name> (<list_of_cols, ...>);`

What is the naming convention for indexes

- table: users, cols: first_name, last_name
- `idx_users_first_name_last_name`
- `CREATE INDEX idx_users_first_name_last_name ON users (first_name, last_name);`

What is the time complexity of a query w/o an index?

- O(n)

What about with an index?

- O(log n)

**Every time we add an index, all of our other operations (COULD) become more expensive!**

We want to make this more efficient, but before we start throwing indexes in there, we need to have a base of how long this query takes

How do we start a benchmark?

- .timer on

The first time we run a query is the most expensive

How do we check if a query is already using an index?

```sql
EXPLAIN QUERY PLAN
<the query code>
```

What steps do we take to benchmark a query?

1. Turn .timer on
2. Run an initial query to get initial time
3. EXPLAIN QUERY PLAN to identify if an index is being used
4. If no index, add index
5. EXPLAIN QUERY PLAN again to confirm that the index is being used
6. Run query again to get the new time

What is the difference between SCAN and SEARCH responses from EXPLAIN QUERY PLAN?

SCAN - checking all records
SEARCH - binary searching an index

Every time we add a UNIQUE constraint to a column, we are adding an index

- This allows SQL to quickly identify if the UNIQUE constraint passes or fails

What is an N+1 Query?

- This happens when we run an initial query, then iterate over those results and
  and run an additional query on each result.

N+1:

```js
router.get('/', (req, res, next) => {
    const sql = 'SELECT boardgames.id, boardgames.name, boardgames.max_players, boardgames.category_id FROM boardgames;'
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err)
        } else {
            for (let i = 0; i < rows.length, i++) {
                const sql2 = 'SELECT categories.category FROM categories WHERE id = ?;'
                const params2 = [rows[i].categoryId]
                db.get(sql2, params2, (err, row) => {
                    // add each category to corresponding game object
                })
            }
            res.json({ games: rows })
        }
    })
})
```

NOT N+1:

```js
router.get('/:gameId(\\d+)', (req, res, next) => {
    const sql = 'SELECT boardgames.name, boardgames.max_players, categories.category,
                        reviews.content, users.username
                        FROM boardgames
                        JOIN categories
                        ON (boardgames.category_id = categories.id)
                        JOIN reviews
                        ON (boardgames.id = reviews.game_id)
                        JOIN users
                        ON (reviews.user_id = users.id)
                        WHERE boardgames.id = ?;'
    const params = [req.params.gameId];
    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err)
        } else {
            res.json(rows)
        }
    })
})
```

During your time here at a/A, don't worry about efficiency. Focus on getting your
code to work, then you can go back and refactor.
**!! LAZY LOAD YOUR AGGREGATE DATA !!**

SQL Injection Attacks

```js
router.post("/search", (req, res, next) => {
  if (req.body.filter.length > 0) {
    const searchTerm = req.body.filter;
    const sql = `SELECT * FROM boardgames WHERE name = '${searchTerm}';`;
    db.exec(sql, (err) => {
      if (err) {
        next(err);
      } else {
        db.all(sql, [], (error, rows) => {
          if (error) {
            next(error);
          } else {
            res.json(rows);
          }
        });
      }
    });
  } else {
    res.json({ msg: "Please provide a valid game name" });
  }
});
// Settlers of Catan; DROP TABLE boardgames;
```

Biggest takeaways from today:

- How to benchmark queries and how to recognize N+1 queries

```
** Spend the rest of the day allowing students to go through the homework
```
