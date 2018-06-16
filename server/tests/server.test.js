const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server.js');
const { Todo } = require('./../models/todo.js');

const todos = [{
    text: 'First test todo'
}, {
    text: 'Second test todo'
}];


beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => {
        return done();
    })
});
  

describe('POST /todos', () => {
    
    it('should create a new todo', (done) => {
        let text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({
                text:text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err) {
                    return done(err);
                }

                Todo.find({text:text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => {
                    return done(e);
                })
            });
    })

    it('should not create a new todo if the data POSTed in invalid', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => {
                    return done(e);
                })
            })
    })
});

describe('GET /todos', ()=>{
    it('should return all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res)=>{
                expect(res.body.todos.length).toBe(2) // do not need to use the .end call as we're not doing anything asyncronously
            })
            .end(done);
    });
});