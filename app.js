// je crée une variable qui utilise la méthode require pour importer le fichier mock-coworkings.js
const express = require('express')
const app = express()
const port = 3108

const coworkings = require('./mock-coworkings');

app.get('/api/coworkings', (req, res) => {
  const myCoworking = coworkings.filter((data) => {
    return data.superficy > req.query.limit
    })
  res.json(myCoworking)
})

app.get('/api/coworkings/:id', (req, res) => {
  let myCoworking = coworkings.find((data) => {
    return data.id === parseInt(req.params.id)
  })
  res.json(myCoworking)
})

// j'utilise listen pour écouter le port 3108
app.listen(port, () => {
  console.log(`App on port ${port}`)
})