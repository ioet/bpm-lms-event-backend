const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongojs = require('mongojs');
var db = mongojs('localhost:27017/tests');

app.get('/test', (req, res) => {
  db.collection('tests').find({name: "First Test"}, function(err, data) {
    if(err) {
      console.log('MONGO error reading document: ' + err);
    } else {
      res.send(data);
    }
  });
})


app.listen(process.env.PORT || 8081)