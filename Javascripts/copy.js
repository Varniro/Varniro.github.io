const copy = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  typeWriter();
}

var i = 0;
var txt = 'opied to Clipboard';
var speed = 25;
var timer;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("copy").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  document.getElementById("copy").style.opacity = "1";
  timer = setTimeout(clear,1500);

  console.log("tw");
}

function clear(){
  document.getElementById("copy").innerHTML = "C";
  i = 0;
  clearInterval(timer);
  document.getElementById("copy").style.opacity = "0";
  console.log("clear");
}