const cluster = require('cluster')
const express = require('express')
const numCPUs = require('os').cpus().length
const helmet = require('helmet')

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        // Create a worker
        cluster.fork();
    }
} else {
    const app = express()

    // add some security-related headers to the response
    app.use(helmet())

    let ApiRoute = require('./routes/api.js')
    app.use('/', ApiRoute)

    // app.listen(3000, () => console.log('listening on port 3000!'))
    module.exports = app
}
