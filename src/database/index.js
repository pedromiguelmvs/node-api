const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<myUsername>:<myPasswd>@omnistack10.o7zmp.mongodb.net/api?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;