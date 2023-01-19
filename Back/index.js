const express = require('express')
//import mongoose from 'mongoose';
//console.log(express)
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

//base de données
const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://firstdb:<password>@cluster0.yvivmp3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const {schema} = mongoose

// const product = mongoose.model(product, product_shema)
// console.log("product:", product)
//mongoose.connect(uri);

//MIDDLE WARE
app.use(cors());  
app.use(bodyParser.json());

//Routes 3 endpoints

app.post('/api/products', (req, res) => {
  //console.log("please")
  //console.log(req.body)
  // res.setHeader("Access-Control-Allow-Origin", "*")
  //res.send('baby');
  const product1 = req.body
  res.send({product : product1})
})

// ok en vue de la réponse
app.get('/api/products', (req, res) => {
  console.log(req.params);
  res.send('Hello World!')
})

//1/ uniquement id
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

//3eme insertion des infos à la base de données