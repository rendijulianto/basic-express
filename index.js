const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send('Hello World!')
})
app.post('/users', function (req, res) {
    res.send('Got a POST request')
})
app.put('/users', function (req, res) {
    res.send('Got a PUT request')
})
app.delete('/users', function (req, res) {
    res.send('Got a DELETE request')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})