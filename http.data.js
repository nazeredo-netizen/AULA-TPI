     const express = require('express')
     const data = new Date()
     
const app = express()

app.get('/', (request, response) => {

response.send(`Hora-${data.getHours()}:${data.getMinutes()} Data:${data.getUTCDate()}/${data.getUTCMonth()+1}/${data.getFullYear()}`)
})

app.listen(8080)