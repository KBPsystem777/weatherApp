
const express = require('express');

const app = express();

const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Serve Static files
app.use(express.static('public'));

app.listen(port);

console.log(`Listening to http://localhost:${port}`);
