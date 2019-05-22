const express = require('express')
const router = express.Router()

let MainController = require('../controller/MainController')

router.get('/', MainController.index)

module.exports = router
