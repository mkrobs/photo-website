//initialize firebase
const firebaseConfig = {

    apiKey: "AIzaSyCQ6q40aCoAE0x4LK_DPbkFrWWvunDY_Mk",

    authDomain: "contactform-42999.firebaseapp.com",

    databaseURL: "https://contactform-42999-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "contactform-42999",

    storageBucket: "contactform-42999.appspot.com",

    messagingSenderId: "599678970983",

    appId: "1:599678970983:web:3656595aa6762902f978c2"

  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// Submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    console.log(name)

    // Save message
    saveMessage(name, email, subject, message);
}


