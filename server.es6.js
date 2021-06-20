const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', function (req, res) {
   res.send('Hola Mundo');
})

const server = app.listen(PORT, function () {
   console.log(`Example app listening at http://localhost:${PORT}`)
})