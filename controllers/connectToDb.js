const mongoose = require('mongoose');

url = 'mongodb://localhost:27017';
const db = mongoose.connection;

module.exports = function() {
  mongoose.connect(url);
  db.on('open', () => {
    console.log('Connected to database');
  });

}