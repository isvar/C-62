import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA9i1XQPGWfwdiimBqX3cqYIeR9OpwQ-2s",
  authDomain: "school-attendance-a4a38.firebaseapp.com",
  databaseURL: "https://school-attendance-a4a38-default-rtdb.firebaseio.com",
  projectId: "school-attendance-a4a38",
  storageBucket: "school-attendance-a4a38.appspot.com",
  messagingSenderId: "547348140428",
  appId: "1:547348140428:web:a6ba4aa055bbd8dbeac6a9",
  measurementId: "G-TLH6Z9N8ZH"
}; 
firebase.initializeApp(firebaseConfig)
export default firebase.database()
 

  