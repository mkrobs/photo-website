import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

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
             let randomId = Math.floor(Math.random() * 10000000);
             if (enterName.value == "") {
                 alert("Please enter your name");
                 return false;
             }
             else if (enterEmail.value == "") {
                alert("Please enter your email");
                return false;
            }
            else if (enterSubject.value == "") {
                alert("Please enter your subject");
                return false;
            }
            else if (enterMessage.value == "") {
                alert("Please write a message");
                return false;
            }
            else if (ValidateEmail(enterEmail.value) == false) {
                return false;
            }

             else {
             set(ref(db, "Messages/" + randomId + enterName.value),{
                 Name: enterName.value,
                 Email: enterEmail.value,
                 Subject: enterSubject.value,
                 Message: enterMessage.value,
                 Id: randomId
             })
             .then(()=>{
                 alert("Message sent successfully!");
                 document.getElementById("contactForm").reset();
             })
             .catch((error)=>{
                 alert(error);
             });}
             
         }
 
   submitBtn.addEventListener('click', insertData);
   
   function ValidateEmail(inputText)
   {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(inputText.match(mailformat))
   {
   return true;
   }
   else
   {
   alert("You have entered an invalid email address!");
   return false;
   }
   }
   
