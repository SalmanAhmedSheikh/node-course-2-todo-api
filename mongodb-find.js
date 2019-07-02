const {MongoClient} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {

        return console.log('Unable to connect to DB',err);
    }
    

console.log('Connect to Mongo DB');

db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{

console.log('ToDos');
console.log(JSON.stringify(docs,undefined,2));

},(err)=>{

    console.log('Unable to retrieve Data');
});

});