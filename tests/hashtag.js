/* eslint-disable no-unused-expressions */

var expect = require('chai').expect
var Hashtag = require('../app_server/models/hashtag')

describe('hashtag', function () {
  it('should be invalid if name is empty', function (done) {
    var hashtag = new Hashtag()

    hashtag.validate(function (err) {
      expect(err).to.not.be.eql(null)
      expect(err.errors.name).to.exist
      done()
    })
  })

  it('should be invalid if photos is empty', function (done) {
    var hashtag = new Hashtag({name: 'coffe'})
    hashtag.validate(function (err) {
      expect(err).to.not.be.eql(null)
      expect(err.errors.photos).to.exist
      done()
    })
  })

  it('should be valid if photos is not empty and has valid picture urls', function (done) {
    var hashtag = new Hashtag({name: 'coffe',
      photos: ['https://scontent-frx5-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg']})
    hashtag.validate(function (err) {
      expect(err).to.be.eql(null)
      done()
    })
  })

  it('should be invalid if photos is not empty but has invalid picture urls', function (done) {
    var hashtag = new Hashtag({name: 'coffe',
      photos: ['https://scontent-frx5-1.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg',
        'http://google.com']})
    hashtag.validate(function (err) {
      expect(err).to.not.be.eql(null)
      expect(err.errors.photos).to.exist
      done()
    })
  })

  it('should be invalid if photos is not empty but has invalid text as url', function (done) {
    var hashtag = new Hashtag({name: 'coffe',
      photos: ['dhuahusdhfuhasiuhuias']})
    hashtag.validate(function (err) {
      expect(err).to.not.be.eql(null)
      expect(err.errors.photos).to.exist
      done()
    })
  })
})
