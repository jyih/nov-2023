const express = require('express');
const app = express();


app.get('/status', (req, res) => {
    res.send("The server is alive!")
})


const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));