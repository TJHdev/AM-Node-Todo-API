// const  MongoClient = require('mongodb').MongoClient; 
const  {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID("5b2416e71486e6288a35156c")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch Todos', err);
    // })

    db.collection('Users').find({
        name: 'Thomas'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch Todos', err);
    })

    db.collection('Users').count().then((count)=>{
        console.log(`Users count: ${count}`);
    }, (err)=>{
        console.log('Unable to count Users', err);
    })

    client.close();
});