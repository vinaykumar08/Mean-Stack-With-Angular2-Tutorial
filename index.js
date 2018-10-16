const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
const config = require('./config/database');
const path = require ('path');

mongoose.Promise = global.Promise;
MongoClient.connect(config.uri ,{ useNewUrlParser: true }, (err)=>{
    if(err) {
        console.log('Could Not Connect to DB', err);
    }
    else {
        console.log('Connected To DB' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client'));


app.get('*', (req, res) =>{
     res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
    
  });
  
  app.listen(2000 ,()=>{
      console.log('Listening on port 2000');
  });