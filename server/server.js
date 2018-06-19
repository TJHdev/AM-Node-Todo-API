const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/todo.js');
const { User } = require('./models/user.js');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo ({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos:todos
        });
    }, (e) => {
        res.status(400).send(e);
    })
});

//GET /todos/5b257e63eb1fa937e03403c0
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    } 

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo:todo});
    }).catch(() => {
        res.status(400).send();
    })

});


app.listen(port, () => {
    console.log('Server is up on port 3000!')
});

module.exports = {
    app: app
}
