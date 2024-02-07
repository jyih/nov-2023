# Databases!

What is a database?

- Collection of data
  - Stored in Tables in column/row format
  - Add, Access, Update, and Delete data
  - We can apply individual rules to each column
  - An instance in a row is called a record
  - Tables have a plural name because they hold multiple things

What is the tool called that we use to manage and interact with DBs?

- Relational Database Management System (RDBMS)

What is SQL?

- Structured Query Language

## SQLite3

Running "sqlite3" in the cli will allow us to connect to a sqlite db

- Note the transient in-memory database printout. This means that any changes made to this DB will be gone once we leave the instance.
  To create a database that will persist, we can run the command `sqlite3 <database name>.db`

SQL does not like trailing commas, and we must add the semi-colon after we are done

This is because SQL is going to take our multi-line commands and put it all together in a single line, so SQL needs to know when we are terminating the command versus continuing on the next line.

We can use the ".tables" command to see all the tables in our db

We create a .sql to write our SQL commands in

We can create SQL files for us to write SQL commands in.

This makes editing commands much easier!

Convert the dbdiagram table to sql in our example.sql file

```sql
CREATE TABLE <table name> (
<column name> <data type> <attributes>
id INTEGER PRIMARY KEY AUTOINCREMENT,
<CONTINUE FILLING IN TABLE>
);
```

```sql
INSERT INTO <table name> (LIST OF COLUMNS WE ARE ADDING DATA FOR)
VALUES <comma separated list of seeds>
```

SQL prefers single quotes, but can allow for double quotes. NO back ticks!
For apostrophes, we use 2 single quotation marks
i.e. 'Kiki''s Delivery Service'

We can run ".headers on" and ".mode column", or "mode box" to make our queries easier to read

All queries need at least 2 statements: SELECT and FROM

SELECT - What columns do we want?
FROM - What table are we querying?
We can do more than that though

WHERE - Allows us to filter or target specific values or sets of values
We can chain multiple filters using AND/OR

Delete

```sql
 DELETE FROM <table name> WHERE <condition>;
```

Note that if we leave off the WHERE clause, it will delete all of the data from that table, and it will NOT ask for confirmation

Update

```sql
UPDATE <table name> SET <column name> = <value> WHERE <condition>;
```

Again, the WHERE clause is not required. If we leave it off, it will update every record in the table to have that updated value
