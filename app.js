'use strict'

var express = require('express')
var path = require('path')
var app = express()
var routes = require('./app_server/routes/index')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'app_server', 'views'))
app.set('view engine', 'pug')
app.use(cookieParser())
app.use(bodyParser.json)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
