const express = require('express');
const server = express();
const PORT = 3000;
const pg = require('pg');

connectionString = 'postgres://postgres:password@db:5432/practicedocker';

server.listen(PORT, () => console.log(`Server running on ${PORT}`));


server.get('/', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       res.status(200).json({"status": "Connected"});
    });
});


