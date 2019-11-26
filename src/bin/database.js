const mongo = require('mongodb').MongoClient

require('dotenv').config();

const url = process.env.DATABASE;

mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
if (err) {
  console.error(err)
  return
}
const db = client.db('crudmongodb');
const collection = db.collection('notes');



const find = async () => {
  try {
    
    const item = await collection.find().toArray(function (err, result) {
      if (err) throw err
    
      //console.log(result[0])
      
      
    });
    return item;
  }
  catch(err) {
    
  }
};

find();


});


module.exports = mongo;