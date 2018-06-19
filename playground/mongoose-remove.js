const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');


// we do not get the docs back that were removed.
Todo.remove({}).then((result) => {
    console.log(result);
})

let todoId = '5b28e211fd306f0014f6648a'

// returns the object of the todo that was removed.
Todo.findOneAndRemove({_id:todoId}).then((todo) => {
    console.log(todo)
})

// returns the object of the todo that was removed.
Todo.findByIdAndRemove(todoId).then((todo) => {
    console.log(todo);
});