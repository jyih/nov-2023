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






*/