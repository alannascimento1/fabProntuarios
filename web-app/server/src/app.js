const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var network = require('./fabric/network.js');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/getAll', (req, res) => {
  network.getAll()
    .then((response) => {      
        var Record = JSON.parse(response);        
        res.send(Record)
      });
  // res.send("Pegou todos os carros");
})

app.post('/getForKey', (req, res) => { 
  network.getForKey(req.body.key)
      .then((response) => {
        res.send(response)
      })
})

app.post('/getHistoryKey', (req, res) => {
  network.getHistoryKey(req.body.key)
      .then((response) => {
        res.send(response)
      })
})

app.post('/createPront', (req, res) => {
  network.createPront(req.body.id, req.body.cpf, req.body.name, req.body.data, req.body.idade, req.body.informacao)
      .then((response) => {
        res.send(response)
      })
})

app.listen(process.env.PORT || 8081)