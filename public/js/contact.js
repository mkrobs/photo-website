import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, get, set, push } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const config = {

    apiKey: "AIzaSyCQ6q40aCoAE0x4LK_DPbkFrWWvunDY_Mk",
 
    authDomain: "contactform-42999.firebaseapp.com",
 
    databaseURL: "https://contactform-42999-default-rtdb.europe-west1.firebasedatabase.app",
 
    projectId: "contactform-42999",
 
    storageBucket: "contactform-42999.appspot.com",
 
    messagingSenderId: "599678970983",
 
    appId: "1:599678970983:web:3656595aa6762902f978c2"
 
 };
 
 
   const app = initializeApp(config);
   
   // Reference messages collection
   const db = getDatabase(app);
 
   let enterName = document.querySelector("#name");
   let enterEmail = document.querySelector("#email");
   let enterSubject = document.querySelector("#subject");
   let enterMessage = document.querySelector("#message");
    
  let submitBtn = document.querySelector("#submit");
 
     function insertData(e) {
             e.preventDefault();
             set(ref(db, "Messages/" + enterName.value),{
                 Name: enterName.value,
                 Email: enterEmail.value,
                 Subject: enterSubject.value,
                 Message: enterMessage.value
             })
             .then(()=>{
                 alert("Message sent successfully!");
                 document.getElementById("contactForm").reset();
             })
             .catch((error)=>{
                 alert(error);
             });
             
         }
 
   submitBtn.addEventListener('click', insertData);
   



