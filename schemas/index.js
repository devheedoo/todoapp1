const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {

    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://Heedo:1234@localhost:27017/admin', {
      dbName: 'todoapp1',
    }, (error) => {
      if (error) {
        console.error('MongoDB connection error:', error);
      } else {
        console.log('MongoDB connection success');
      }
    });
    connect();

    mongoose.connection.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });
    mongoose.connection.on('disconnected', () => {
      console.error('MongoDB disconnected. Reconnecting...');
      connect();
    });
  }

  require('./todo');
}