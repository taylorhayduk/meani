var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we\'re connected');
});

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.listen(app.get('port'), function(){
  console.log('listening on port ' + app.get('port'))
});
