const express = require ('express');
const app = express();

var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://sate_codot:1234@localhost:27017/toko';

MongoClient.connect(url, function(err, db){
    console.log("Terhubung ke MongoDB!");
});

app.get('/data', (req, res)=>{ MongoClient.connect(url, (err, db)=>{ var collection = db.collection('karyawan'); collection.find({}).toArray((err, docs)=>{ console.log(docs); res.send(docs); });});})
app.post('/data', (req,res)=>{ MongoClient.connect(url, (err, db)=>{ var data = {nama:'Susi', usia:22}; var collection = db.collection('karyawan'); collection.insert(data, (err, result)=>{ console.log(result); res.send(result); });});})


app.listen(3210, ()=>{
    console.log('Server aktif di port 3210')
});