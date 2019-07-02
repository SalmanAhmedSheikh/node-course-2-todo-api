const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err)
{
return   console.log('Unable to connect to server');

}

console.log('Connect to Mongo DB Server');

// db.collection('Users').insertOne({
//     name:'Salman Ahmad',
//     age:33,
//     location:'Karachi'
// },(res,err)=>{

//     if(err)
//     {
//         return console.log('Unable to Insert User',err);
//     }

// });

// db.close();


db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });

  db.close();
})

