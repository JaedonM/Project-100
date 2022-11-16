

//import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBLG6Wowye-heF_q1KVmgh3Tx01tbL_aqQ",
  authDomain: "lets-chat-web-app-1992b.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-1992b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-1992b",
  storageBucket: "lets-chat-web-app-1992b.appspot.com",
  messagingSenderId: "1092240096645",
  appId: "1:1092240096645:web:42d34cd5da302111ce98ec"
};



firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



