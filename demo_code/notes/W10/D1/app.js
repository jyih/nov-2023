const express = require('express');

const app = express();

app.use(express.json()) //allow us to access the body of the request

app.get('/:example/more/:again', (req, res) => {
    console.log(req.params)
    res.json(req.params)
})
//http://localhost:9000/321/more/123

app.get('/', (req, res) => {
    console.log(
        'I did the change'
    )
})

app.post('/create', (req, res) => {
    console.log(req.body)
})
//if nothing in req body, you'll see undefined


const port = 9000
app.listen(port, () => console.log(`Server is listening on changes ${port}`));