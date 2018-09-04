const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const users = [
    {
        name: 'Sara Hagstrom',
        username: 'shagstrom',
        email: 'sara@gmail.com',
        password: 'passwordpassword'
    },
    {
        name: 'Joe Blank',
        username: 'jblank',
        email: 'joe@gmail.com',
        password: 'passwordpassword'
    },
    {
        name: 'Ali Skalla',
        username: 'askalla',
        email: 'ali@gmail.com',
        password: 'passwordpassword'
    },
]

app.get('/users', (req, res) => {
    res.status(200).send(users)
})

const port = 3838;

app.listen(port, () => { console.log(`Challenging on port ${port}`) })


