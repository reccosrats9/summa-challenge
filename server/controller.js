const users = require('./users.json')

module.exports = {
    login(req, res) {
        const { username, password } = req.body
        let match= users.filter(user => {
            return user.username === username
        })
        if (match.length > 0 && match[0].password === password) {
            res.status(200).send(match[0])
        } else {
            res.status(401).send('Incorrect Login')
        }
    },
    register(req, res) {
        const { name, username, email, password } = req.body
        users.push({ name, username, email, password })
        res.status(200).send(users[users.length-1])
    },
    getUsers(req, res) {
        //protect password
        users.forEach(user => user.password = '***')
        res.status(200).send(users)
    },
}