const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo.js');
const { User } = require('./../../models/user.js');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'thomasthejoke@lol.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId.toHexString(), access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'jen@example.com',
    password: 'userTwoPass'
}]

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User (users[0]).save();
        let userTwo = new User (users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => {
        return done();
    })
}

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 351
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => {
        return done();
    })
}



module.exports = {
    users: users  ,
    populateUsers: populateUsers,
    todos: todos,
    populateTodos: populateTodos
}