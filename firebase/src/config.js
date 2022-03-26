import firebase from 'firebase/app' //node_modulesからコアとなるfirebaseのパッケージをimportする、firebaseを使うなら必ずimportする必要がある
import 'firebase/firestore' // firestoreを使いたいのでimportする
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj8DQqV3entfA2R2FrSSyA4NjKgnjPql8",
    authDomain: "snacky-1837b.firebaseapp.com",
    projectId: "snacky-1837b",
    storageBucket: "snacky-1837b.appspot.com",
    messagingSenderId: "477037542380",
    appId: "1:477037542380:web:de6cfadafb9c9416ad9ec9",
    measurementId: "G-H3MZN8X3V6"
  };

// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスも初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }