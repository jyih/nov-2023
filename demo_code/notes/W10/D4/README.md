# Database Relationships

What are the 3 types of relationships?

1. one-to-one
   - we're not going to see many of these
2. one-to-many
   - we will do a LOT of these
3. many-to-many
   - Note that Join table can have more than 1 foreign key

There are a couple ways to establish a FK in a `CREATE TABLE` command.

1. At the bottom of the `CREATE`, we can add: `FOREIGN KEY (<column name>) REFERENCES <other table>(id)`
2. We can combine that on the column info: `<column name> INTEGER REFERENCES <other table>(id)`

"FOREIGN_KEY constraint failed" is one of the MOST common errors you will come across in your projects

What about deleting?

ON DELETE CASCADE can help remedy foreign key constaints.
Place on the FK column

ON DELETE SET NULL will keep data in the table but allow the delete happen.

Our `DROP TABLE IF EXISTS` should be reversed from the order of our `CREATE TABLE` statements.

## New Query Keywords

BETWEEN - inclusive `WHERE <column> BETWEEN <value 1> AND <value 2>`

IN - something is true from a group of possibilities `WHERE <column> IN (<comma separated values>)`

LIKE - search for partial strings `WHERE <column> LIKE %<partial string>%`

- % = wildcard character
- Case insensitive in SQLite

ORDER BY - allows us to go against the default ordering behavior `ORDER BY <column>`

- Default order is ASC, but can add DESC to our command to reverse that
- Can order by multiple factors by adding more columns separated by a comma

LIMIT - only return a certain number of records `LIMIT <value>`

OFFSET - skip a certain number of records `OFFSET <value>`

- Can only be used in conjunction with LIMIT
- Usually used in Pagination

DISTINCT - returns only distinct (different) values `SELECT DISTINCT <column> FROM <table>;`

We can also perform mathematical operations to our columns in a SELECT `SELECT <column> + <value> FROM <table>`

- This doesn't actually change the data in our DB

We can also alias our columns in a SELECT `SELECT <column> AS <alias> FROM <table>`

- The ON keyword is what tells SQL what the association is and how to combine them
- Use dot notation to deal with abiguity in column names in the SELECT
- The order of our values in the ON statement doesn't matter
- The order of our JOIN statements matters when we are joining more than 2 tables together since we have to connect all the links of the chain.
