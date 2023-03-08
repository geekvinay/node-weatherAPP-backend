const { getAuth } = require('firebase-admin/auth')
require('../auth/admin')

function verifyID (req, res, next) {
  let idToken = req.headers['authentication']
  idToken = idToken.replace('Bearer ', '')
  getAuth()
    .verifyIdToken(idToken)
    .then(decodedToken => {
      return next()
    })
    .catch(error => {
      throw new Error(
        "User can't access the api endpoint without authentication!!"
      )
    })

  return next()
}

module.exports = verifyID
