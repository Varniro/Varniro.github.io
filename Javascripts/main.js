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

var clip = new Clipboard('.btn');

clip.on("success", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that worked.</div>');
});
clip.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
});