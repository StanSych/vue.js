// Initialize Firebase
import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCJpKyqwJRIFHlxDRjRZiG4FPKetiE7lBM",
    authDomain: "creativecards-app.firebaseapp.com",
    databaseURL: "https://creativecards-app.firebaseio.com",
    projectId: "creativecards-app",
    storageBucket: "creativecards-app.appspot.com",
    messagingSenderId: "161418717154"
};

Firebase.initializeApp(config);