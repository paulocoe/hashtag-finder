var router = require('express').Router()
var ctrlAuth = require('../controllers/authentication')
var ctrlHashtag = require('../controllers/hashtag')

// authentication routes
router.get('/auth', ctrlAuth.auth)
router.get('/login', ctrlAuth.login)
router.get('/handleAuth', ctrlAuth.handleAuth)

// hashtag routes
router.get('/', ctrlHashtag.index)
router.get('/home', ctrlHashtag.homelist)
router.get('/search/:hashtag', ctrlHashtag.search)
router.post('/save/:hashtag', ctrlHashtag.save)
router.delete('/delete/:hashtag', ctrlHashtag.delete)

module.exports = router
