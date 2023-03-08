var admin = require('firebase-admin')
var serviceAccount = require('../../config/kiwi---weather-app-firebase-adminsdk-lasmy-a504bb3a1b.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = auth
