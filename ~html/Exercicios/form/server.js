const express = require('express')
const app = express ()
const bodyParser = require('body-parser')
const { response } = require('express')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {

   console.log(req.body)
   resp.send('Parabéns')
})

app.post('/usuarios/3:id', (req, resp) => {

   console.log(req.body)
   resp.send('Parabéns')
})

app.listen(3003)

app.listen(3003)