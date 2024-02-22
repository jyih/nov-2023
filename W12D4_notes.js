/*

Scopes

Dries up our code
Ensures we are retrieving data from our DB that we intend to retrieve

Couple ways to add scopes:
    Default scope to model
        In last object in init:
            defaultScope: {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
    Scopes property
        Points to an object
        That object has KV pairs with the key being the name of the scope, and the value being the object to be passed to the query
        When applying a non-default scope, we have to adjust our query
            We have to add .scope() to our query
            <model>.scope(<scopes>).<query method>()
        If we add a named scope to a query, then the defaultScope will not be applied automatically
        If multiple scopes contradict each other, the one that is applied first is COMPLETELY ignored

        We can also add a function scope
            Function scopes RETURN a filter to be applied to the query
            Function scopes get passed in to the .scope() as another object with a key of "method" and a value of an array:
                [<func scope name>, <args>]



*/