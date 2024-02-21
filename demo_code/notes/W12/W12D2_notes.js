/*

Search Features and Pagination

A couple things to think about when setting up pagination
    Should take in page and size query params to determine pagination
    When writing our queries, we use a couple properties for pagination
        limit: size
        offset: size * (page - 1)

How do we handle these edge cases?
    If page or size are undefined, they should be set to defaults of 1 and 10 respectively

    If page or size are less than 1, add no pagination and return all results
        This can be done by writing a separate query inside a conditional
            This is highly repetitive

Search Features
    We can take in a query string and filter the results based on that string
        We can check that a query string has been passed in, assigning that value to the queryObj.where

    Should take in a title query string and match partial names in the DB

    Should take in a maxLength query string to filter our longer songs

    Should take in a album query string to find all songs associated with that album
        For this one, we need to add an include: [] property to our queryObj so that we can include multiple tables




*/