const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://TomH:someidiot5@ds161610.mlab.com:61610/todo-tomh-db` || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};

