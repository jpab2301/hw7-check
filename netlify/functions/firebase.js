const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDAS3f0EmarLW16wUK527zdc0acDYNC7Ro",
  authDomain: "kiei-451-a6263.firebaseapp.com",
  projectId: "kiei-451-a6263",
  storageBucket: "kiei-451-a6263.appspot.com",
  messagingSenderId: "644860616987",
  appId: "1:644860616987:web:3cac3f814fdca13a0373be"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase