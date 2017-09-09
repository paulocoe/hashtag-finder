'use strict'

var mongoose = require('mongoose')
var hashtags = require('../models/hashtag')
var config = require('../../config/config')

// Connect to database
mongoose.connect(config.db.uri)

// On connection success
mongoose.connection.on('connected', function () {
  console.log('Connected to database: ', config.db.uri)
})

// On connection error
mongoose.connection.on('error', function (err) {
  console.log('Database error', err)
})

// Index page action
module.exports.index = function (req, res) {
  if (!req.cookies['access_token']) { res.render('index') } else { res.redirect('/home') }
}

// Home page action with the list of stored hashtags
module.exports.homelist = function (req, res) {
  if (!req.cookies['access_token']) { res.redirect('/') }
  hashtags.find({}).lean().exec()
}

// Delete Action
module.exports.delete = function (req, res) {
  if (!req.cookies['access_token']) { res.redirect('/') }
  var hashtagName = req.body.name
  hashtags.findOneAndUpdate({ name: hashtagName })
// After deletion, redirects the user to home screen
  res.redirect('/home')
}
