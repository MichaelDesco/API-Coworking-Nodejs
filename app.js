const express = require('express')
const app = express()
const port = 3108

app.get('/MyRoute', (req, res) => {
    console.log('I make a request to the server')
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})