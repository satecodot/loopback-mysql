var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://sate_codot:1234@127.0.0.1:27017/toko';

MongoClient.connect(url, function(err, db){
    console.log("Terhubung ke MongoDB!");
    findData(db, function(){
        db.close();
    });
});

var findData = function(db, callback){
    var collection = db.collection('karyawan');
    collection.find({}).toArray(function(err, docs){
        console.log("Berikut data yang tersimpan:");
        console.log(docs)
        callback(docs)
    })
        // [{nama: 'Jonny', usia : 32, kota: 'Bandung'}, {nama:'Andini', usia : 23, kota:'Surabaya'}, {nama:'Johan', usia:28, kota: 'Surabaya'}, {nama:'Sundari', usia:28, kota:'Malang'}],
        // function(err, result) {
        //     console.log("Data sukses tersimpan!");
        //     callback(docs);
        // });
}