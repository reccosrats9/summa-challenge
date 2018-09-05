const users = require('./users.json')

module.exports = {
    login(req, res) {
        console.log(req.body)
        const { username, password } = req.body
        let match= users.filter(user => {
            return user.username === username
        })
        if (match.length > 0 && match[0].password === password) {
            console.log(match[0])
            res.status(200).send(match[0])
        } else {
            res.status(401).send('Incorrect Login')
        }
    },
    getUsers(req, res) {
        //protect password
        users.forEach(user => user.password = '***')
        res.status(200).send(users)
    },
}