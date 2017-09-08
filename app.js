'use strict'

var express = require('express')
var path = require('path')
var app = express()
var config = require('./config/config')
var routes = require('./app_server/routes/index')

app.set('views', path.join(__dirname, 'app_server', 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
