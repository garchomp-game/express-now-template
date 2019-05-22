const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.get('/', (req, res) => {
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
})

// app.listen(3000, () => console.log('listening on port 3000!'))
module.exports = app
