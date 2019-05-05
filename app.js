const path = require('path');
const express = require('express');

const app = express();

const PORT = 8080;

app.use('/static', express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
   console.log(`The app is listening on ${PORT}`); 
});