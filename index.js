const {mine} = require('./mine');
const {PORT} = require('./config');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

mine();
