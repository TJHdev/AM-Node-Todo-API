const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');

let app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
});

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});



// let challengeUser = new User ({
//     email: 'thomasjhanna@lol.com'
// })

// challengeUser.save().then((result)=>{
//     console.log(JSON.stringify(result, null, 2))
// }, (err)=>{
//     console.log(err, null, 2);
// })