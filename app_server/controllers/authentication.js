'use strict'

var httpRequest = require('request')

var config = require('../../config/config')

//POST on Instagram Oauth service in order to get the access_token from the user
module.exports.auth = function (req, res) {
  var options = {
    url: 'https://api.instagram.com/oauth/access_token',
    method: 'POST',
    form: {
      client_id: config.instagram.client_id,
      client_secret: config.instagram.client_secret,
      grant_type: 'authorization_code',
      redirect_uri: config.instagram.redirect_uri,
      code: req.query.code
    }
  }

  httpRequest(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var user = JSON.parse(body)
      res.redirect(('/handleAuth'))
    }
    else res.send(error)
   })
}

// GET 'Login' page from Instagram
module.exports.login = function(req, res){
   res.redirect(config.instagram.auth_url)
}

// GET handleAuth after oAuth authentication were made
module.exports.handleAuth = function(req, res) {
   res.render('test', { title: 'Welcome', message: 'Feel free to browse any hashtag you like' })
}

