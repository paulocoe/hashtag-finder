var express = require('express')
var router = express.Router()
var ctrlAuth = require('../controllers/authentication')
var ctrlHashtag = require('../controllers/hashtag')

// authentication pages
router.get('/auth', ctrlAuth.auth)
router.get('/login', ctrlAuth.login)
router.get('/handleAuth', ctrlAuth.handleAuth)

// hashtag pages
router.get('/', ctrlHashtag.index)
router.get('/home', ctrlHashtag.homelist)

module.exports = router
