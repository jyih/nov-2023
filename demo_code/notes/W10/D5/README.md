# Aggregate Functions and Sub-Queries

AVG

- Find the avg value of a col

COUNT

- Counts the number of entries in table

MIN/MAX

- Find the min/max value of a col

SUM

- Add up all the values in a col
- If all the values are null, returns null

TOTAL

- Add up all the values in a col
- Always returns a floating point value
  If all the values are null, returns 0.0

Where are the aggregate functions placed?
Inside of the SELECT statement!
These aggregate functions are treated like normal functions, so we invoke them with ()
`SELECT <function>(<column>) FROM <table>;`

!! When we run an aggregate function, we do not get all the information from that table, only the aggregate data !!
If you put other column names with the aggregate function in the SELECT, it will only return the first instance

COUNT is different. We can just pass "\*" into the () since it doesn't matter which column it uses.

We can add a WHERE clause to these functions to filter which data is applied in the aggregate.

We can add GROUP BY to the function to have that aggregate happen on specific groups of data
`GROUP BY <column name>`
This is the only way to return multiple things from an aggregate function
It will return a single instance per group

We can add HAVING to a function that we have a GROUP BY on
This acts like a WHERE clause, but for the groups that were created
i.e. `HAVING AVG(length) > 60`

```
** GROUP BY and HAVING are a little more complicated than we expect the students to use, but they are good to know.
```

At this point, we have talked about all of the SQL keywords:
Keywords in the order that should/could be applied in a query:

- SELECT

- FROM

- JOIN

- ON

- WHERE

- GROUP BY

- HAVING

- ORDER BY

- LIMIT

- OFFSET

## Subqueries

Kind of like helper functions in SQL
Can generally be used to replace JOIN ON
Can also be used to get info across multiple tables if they don't have a relationship

When writing a subquery, we should ask 2 questions before starting:
What information do I have?
What information am I looking for?

The purpose of the subquery is to return some information that the outer query can use

\*\* This works for when our subquery returns just 1 record:

```sql
SELECT * FROM <table>
WHERE <FK column> = (
    SELECT id FROM <other table>
    WHERE <column> = <value>
)
```

We can change the SQL operator to handle our subquery returning multiple records
Using the IN operator is the easiest way to do this
Subqueries can be used in any SQL context
