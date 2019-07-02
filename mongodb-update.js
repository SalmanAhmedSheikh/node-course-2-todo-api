const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {

        return console.log("Unable to connect to MongoDB Server");
    }
    console.log('Connected to MongoDB server');



    db.collection('Users').findOneAndUpdate(
{
    _id:new ObjectID("5d1a029eddda19101c9fd5ec")
},
        
        {
           
            $inc:{age:100}
        },
        {
returnOrignal:false

        }

    ).then((result)=>{

        console.log(result);
    });


});