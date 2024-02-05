const express = require('express');

const app  = express();

app.get('/', (req, res) => {
    console.log(
        'I did the change'
    )
})


const port = 9000
app.listen(port, () => console.log(`Server is listening on changes ${port}`));