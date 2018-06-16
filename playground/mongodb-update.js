// const  MongoClient = require('mongodb').MongoClient; 
const  {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b240c478076922dc0233bb6")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log('Updated Todo');
    //     console.log(result);
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b241644fe06a60bc0049313")
    }, {
        $set: { name: 'Zanzibar' },
        $inc: { age: 1 } 
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log('Updated User');
        console.log(result);
    }, (err)=>{
        console.log('Unable to update User', err);
    })

    client.close();
});