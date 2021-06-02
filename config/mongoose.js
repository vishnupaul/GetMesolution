const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/solution_development');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error on mongodb:'));
db.once('open', function () {
  // we're connected!
  console.log('we are connected to DB');
});

module.exports = db;
