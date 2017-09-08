// Configuration used for authentication on Instagram API
// Here you can inform you client_id and client_secret
var IN_CLIENT_ID = ''
var IN_CLIENT_SECRET = ''
var IN_REDIRECT_URI = 'http://localhost:3000/auth'
var IN_AUTH_URL = 'https://api.instagram.com/oauth/authorize/?client_id=' +
              IN_CLIENT_ID + '&redirect_uri=' +
              IN_REDIRECT_URI + '&response_type=code'

module.exports = {
  instagram: {
    client_id: IN_CLIENT_ID,
    client_secret: IN_CLIENT_SECRET,
    auth_url: IN_AUTH_URL,
    redirect_uri: IN_REDIRECT_URI
  }
}
