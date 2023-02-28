const { initializeApp } = require('firebase/app');
const {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
} = require('firebase/auth');

const firebaseConfig = {
  apiKey: 'AIzaSyBbLII28LSbOU5l_Bz3JMgSuBWAsyuYn04',
  authDomain: 'kiwi---weather-app.firebaseapp.com',
  projectId: 'kiwi---weather-app',
  storageBucket: 'kiwi---weather-app.appspot.com',
  messagingSenderId: '544896129238',
  appId: '1:544896129238:web:95a4eabea1005e17ee9177',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const email = 'geekvinay0002@gmail.com';
const password = 'Vinay@12345';

// Creating a new user
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(Error({ errorCode, errorMessage }));
  });

connectAuthEmulator(auth, 'http://127.0.0.1:9099/');
