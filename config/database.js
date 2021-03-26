const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})