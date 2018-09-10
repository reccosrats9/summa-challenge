const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cont= require('./controller')

const app = express()
app.use(bodyParser.json())

app.post('/login', cont.login)
app.post('/register', cont.register)
app.get('/users', cont.getUsers)

const port = 3838;

app.listen(port, () => { console.log(`Challenging on port ${port}`) })


