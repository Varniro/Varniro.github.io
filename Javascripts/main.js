// varn = document.querySelector("#varn_text");
// var rand;
// let fonts = ["Sunshiney", "Rock Salt", "Akromin", "The Girl Next Door"]
// //let fonts = ["Stencil", "Papyrus", "Algerian", "Milkshake"];

// Twitter = document.querySelector("#twitter");

// Discord = document.querySelector("#discord");

// function randomizer() {
//     return rand = Math.floor(Math.random() * 4);
// }

// function adder() {
//     if (rand == 3) {
        
//         rand = 0;
//         varn.style.fontFamily = fonts[0];

//     } else if (rand < 3) {

//         rand += 1;
//     }

//     if(rand == 1 ){
    
//     varn.style.fontSize = "20px";

// }else if(rand == 0 || rand == 2 || rand == 3 ){

//      varn.style.fontSize = "35px";

// }

//     varn.style.fontFamily = fonts[rand], "Cantora One";
// }




// console.log(randomizer());
// varn.style.fontFamily = fonts[rand], "Cantora One";
// varn.addEventListener("mouseover", adder);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDqxx0bAtxF8AgbwgPof8zuRpCg5fjW5M",
  authDomain: "website-7a5a3.firebaseapp.com",
  projectId: "website-7a5a3",
  storageBucket: "website-7a5a3.appspot.com",
  messagingSenderId: "345087588437",
  appId: "1:345087588437:web:701887029db0d518283cdc",
  measurementId: "G-DZ5V6G1Y0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var clip = new Clipboard('.btn');

clip.on("success", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that worked.</div>');
});
clip.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
});