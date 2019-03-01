const mongoose = require('mongoose');

//Map global Promise
mongoose.Promise = global.Promise;
//Mongoose Connect
//mongoose.connect('mongodb://gee:gee@ds029793.mlab.com:29793/pusherpolll')
mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));