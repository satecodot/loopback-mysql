var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://sate_codot:1234@localhost:27017/toko';

MongoClient.connect(url, function(err, db){
    console.log("Terhubung ke MongoDB");
    db.close();
});
