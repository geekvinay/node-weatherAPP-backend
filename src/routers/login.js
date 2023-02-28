const express = require('express');
const router = express.Router();
const auth = require('../auth/userAuth');
const { createUserWithEmailAndPassword } = require('firebase/auth');

router.post('/signup', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);

    if (!email || !password)
      throw new Error('Please provide proper email and password');

    //   Login into the firebase to get the user-token and user-ID
    userToken = await createUserWithEmailAndPassword(auth, email, password);

    res.send({
      email,
      password,
      userToken,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
