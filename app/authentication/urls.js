const express = require('express')
const urls = express.Router()

const actions = require('./actions')

urls.get('/list', actions.list)
urls.get('/login', actions.getlogin)
urls.post('/login', actions.postlogin)
urls.get('/:username', actions.read)
urls.route('/')
    .get(actions.getcreate)
    .post(actions.postcreate)
    .put(actions.update)
    .delete(actions.delete)

module.exports = urls;
