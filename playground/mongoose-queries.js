const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

let id = '5b257e63eb1fa937e03403c0zzz';

// let userId = '5b2506986002f716b8df5057'; // valid
// let userId = '5b2506986002f716b8df5057zzz';
// let userId = '5b2506986002f716b8df5056';
let userId = '5b2506986002f716b8df5057';

if (!ObjectID.isValid(userId)) {
    console.log('ID not valid');
} else {
    
}

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by ID: ', JSON.stringify(user, null, 2));
}).catch((e) => {
    console.log(e);
})



// Todo.find({   
//     _id: id   //mongoose takes the string and coverts it into an ObjectId for us.
// }).then((todos) => {
//     console.log('Todos array: ', todos);
// });

// Todo.findOne({   
//     _id: id   //mongoose takes the string and coverts it into an ObjectId for us.
// }).then((todo) => {
//     console.log('Todo: ', todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id: ', todo);
// }).catch((e) => {
//     return console.log(e);
// }) 