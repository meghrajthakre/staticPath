const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

const staticPath = path.join(__dirname, '../public')

// creating static path for public folder 

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send("Welcome to the server ")
})

app.get('/about', (req, res) => {
    res.send("Welcome to the about page")
})


app.listen(port, (res, err) => {
    console.log(`listening on http://localhost:${port}`)
});