var mongoose = require('mongoose')

var hashtagSchema = mongoose.Schema({
  name: { type: String, required: true },
  photos: { type: [String],
    validate: function (ph) {
      if (!ph || ph.length === 0) { return false }

      return (validatePhotos(ph))
    }
  }
})

// function for validate photos urls on photos array
var validatePhotos = function (photos) {
  for (var index = 0; index < photos.length; index++) {
    var photo = photos[index].toLowerCase()

    if (photo.indexOf('https://') === -1 && photo.indexOf('http://') === -1) { return false }

    if (photo.indexOf('.jpg') === -1) { return false }
  }
  return true
}

module.exports = mongoose.model('hashtagCollections', hashtagSchema, 'hashtagCollections')
