var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser:True}, {useUnifiedTopology:True});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    // connected to mongodb
    console.log("We are connected!!")
})
