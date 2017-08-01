var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);