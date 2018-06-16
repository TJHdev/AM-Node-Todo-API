const mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {        //note mongo _id already has createAt timestamp built into it
        type: Number,
        default: null
    }
});

module.exports = {
    Todo: Todo
}