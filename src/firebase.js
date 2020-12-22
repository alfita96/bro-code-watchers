import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDtIskaPE4KRqGwDoqR42b_bKRC4AYXA4o',
  authDomain: 'bro-code-watchers.firebaseapp.com',
  projectId: 'bro-code-watchers',
  storageBucket: 'bro-code-watchers.appspot.com',
  messagingSenderId: '881576312349',
  appId: '1:881576312349:web:42b6643cf5a2a5defd10f4',
  measurementId: 'G-CW1C7BSG2G'
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const usersCollection = db.collection('users')
const watchlistCollection = db.collection('watchlist')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const postsCollection = db.collection('posts')

export {
  db,
  auth,
  usersCollection,
  watchlistCollection,
  commentsCollection,
  likesCollection,
  postsCollection
}
