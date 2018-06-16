// const  MongoClient = require('mongodb').MongoClient; 
const  {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result)=>{
    //     console.log(result)
    // }, (err) => {
    //     console.log(err);
    // })

    //deleteOne - same as deleteMany but deletes the first one it matchs.
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result)=>{
    //     console.log(result)
    // }, (err) => {
    //     console.log(err);
    // })


    //findOneAndDelete - returns the deleted values
    // db.collection('Todos').findOneAndDelete({
    //     complete: false
    // }).then((result) => {
    //     console.log(result);
    // });


    //Challenge

    // db.collection('Users').deleteMany(
    //     {name:'Thomas'}
    // ).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5b2414f0465d0619ecd0c019")
    // }).then((result)=>{
    //     console.log(result);
    // })

    client.close();
});