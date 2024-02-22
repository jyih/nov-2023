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


JWT - JSON Web Token

    This is how we handle User Auth
        If we want to log a user in, we create a token. If we want to log a user out, we delete that token.

How can we keep data safe as we transport it across the web?
    Encode
        Not very secure. Can easily be decoded.
    Encrypting
        More secure. Can't be decrypted unless they have the secret/password
        If a bad user gets that secret key, we are in trouble
    Hash
        Cannot be reverse-engineered
        Hashing is deterministic
        There is a problem here: There is a possibility that multiple strings could end up hashing to the same value
            This is called a hash collision
        We can use something called a Salt to avoid this hash collision issue

JWTs
    Consists of 3 parts:
        Header
            Contains the type of token
            Indicator for the algo that we use
            JWT will automatically set this
        Payload
            The data we are transmitting
            Can add Claims - such as an expiration
            ONLY Encoded
        Signature
            Hash of the header, payload, and a secret key
            Allows us to validate that our token hasn't been tampered with



*/