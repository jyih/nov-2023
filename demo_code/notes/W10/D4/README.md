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
