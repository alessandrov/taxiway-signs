const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/dist/public'));
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8085);
console.log('Server listening on port 8085');
