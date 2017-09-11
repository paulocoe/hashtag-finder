'use strict'

var mongoose = require('mongoose')
var Hashtag = require('../models/hashtag')
var config = require('../../config/config')
var httpRequest = require('request')
var _ = require('lodash')

// Connect to database
mongoose.connect(config.db.uri)

// // On connection success
mongoose.connection.on('connected', function () {
  console.log('Connected to database: ', config.db.uri)
 })

// On connection error
mongoose.connection.on('error', function (err) {
  console.log('Database error', err)
})

// Search action
module.exports.search = function (req, res) {
  if (!req.cookies['access_token']) { res.redirect('/') }
  var hashtagName = req.params.hashtag.replace('#', '')
  var url = 'https://api.instagram.com/v1/tags/' + hashtagName + '/media/recent?access_token=' + req.cookies.access_token

// GET on Instagram API to get the recent photos with the given hashtag
  httpRequest(url, function (err, response, body) {
    if (!err && response.statusCode === 200) {
      var results = JSON.parse(body)
      var photos = []
      _.forEach(results.data, function (data, key) {
        photos.push(data.images.standard_resolution.url)
      })
      res.send(photos)
    } else res.send(err)
  })
}

// Index page action
module.exports.index = function (req, res) {
  if (!req.cookies['access_token']) { res.render('index') } else { res.redirect('/home') }
}

// Home page action with the list of stored hashtags
module.exports.homelist = function (req, res) {
  if (!req.cookies['access_token']) { res.redirect('/') }
  Hashtag.find({}).lean().exec(function(e, tags){
    res.send(tags)
  })
}

// Save action
module.exports.save = function (req, res) {
  if (!req.cookies['access_token']) { res.render('index') }
  if(!req.body.photos || req.body.photos.lenght === 0) return res.send(500, {error: 'No photos were received'})
  Hashtag.findOneAndUpdate({'name': req.params.hashtag }, {$set:{photos: req.body.photos}}, {upsert:true}, function(err, tag){
    if (err) console.log('Could not save the hashtag: ', req.params.hashtag.name, err.message)
    console.log("succesfully saved")
  });
}

// Delete Action
module.exports.delete = function (req, res) {
  if (!req.cookies['access_token']) { res.redirect('/') }
  var hashtagName = req.params.hashtag
  Hashtag.findOneAndRemove({ name: hashtagName }, function(err){
    if(err) console.log('Could not delete the hashtag: ', hashtagName, err.message)
      else console.log('succesfully deleted: ', hashtagName)
  })
}
