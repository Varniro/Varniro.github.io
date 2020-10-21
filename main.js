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


varn = document.querySelector(".twitter-text")

function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );
}

css( varn, 'font-family' )