const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static('public'));

app.get ('/', function(req, res){
    res.sendFile(path.join(__dirname, '/file.html'));
});

app.listen(process.env.port || 3000);

