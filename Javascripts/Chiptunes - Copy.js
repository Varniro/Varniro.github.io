var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var gbx1 = document.getElementById('gallery-box-1');
var gbx2 = document.getElementById('gallery-box-2');
var gbx3 = document.getElementById('gallery-box-3');
var sign = document.getElementsByClassName("container");
var playsign = document.getElementsByClassName("play-sign");
var pausesign = document.getElementsByClassName("pause-sign");
var isPlaying1 = false;
var isPlaying2 = false;
var isPlaying3 = false;
var gbx = [gbx1,gbx2,gbx3];

function change1(){
	if(isPlaying1 ==  false){
		playsign[0].style.opacity=0;
		pausesign[0].style.opacity = "inherit";
		isPlaying1 = true;
		song1.play();

		if(isPlaying2 == true){
			song2.pause();
			isPlaying2 = false;
			playsign[1].style.opacity="inherit";
			pausesign[1].style.opacity = 0;

		}
		
		if(isPlaying3 == true){
			song3.pause();
			isPlaying3 = false;
			playsign[2].style.opacity="inherit";
			pausesign[2].style.opacity = 0;

		}
	}else if(isPlaying1 ==  true){
		playsign[0].style.opacity="inherit";
		pausesign[0].style.opacity = 0;
		isPlaying1 = false;
		song1.pause();
	}
	
	
}
function change2(){
	if(isPlaying2 ==  false){
		playsign[1].style.opacity=0;
		pausesign[1].style.opacity = "inherit";
		isPlaying2 = true;
		song2.play();

		if(isPlaying1 == true){
			playsign[0].style.opacity="inherit";
			pausesign[0].style.opacity = 0;
			isPlaying1 = false;
			song1.pause();

		}
		if(isPlaying3 == true){
			playsign[2].style.opacity="inherit";
			pausesign[2].style.opacity = 0;
			isPlaying3 = false;
			song3.pause();

		}
	}else if(isPlaying2 ==  true){
		playsign[1].style.opacity="inherit";
		pausesign[1].style.opacity = 0;
		isPlaying2 = false;
		song2.pause();
	}
	
	
}
function change3(){
	if(isPlaying3 ==  false){
		playsign[2].style.opacity=0;
		pausesign[2].style.opacity = "inherit";
		isPlaying3 = true;
		song3.play();

		if(isPlaying1 == true){
			playsign[0].style.opacity="inherit";
			pausesign[0].style.opacity = 0;
			isPlaying1 = false;
			song1.pause();

		}
		if(isPlaying2 == true){
			playsign[1].style.opacity="inherit";
			pausesign[1].style.opacity = 0;
			isPlaying2 = false;
			song2.pause();

		}
	}else if(isPlaying3 ==  true){
		playsign[2].style.opacity="inherit";
		pausesign[2].style.opacity = 0;
		isPlaying3 = false;
		song3.pause();
	}
	
	
}

function on(event) {
    var timer = setInterval(function() {
        if(event.target.firstElementChild.style.opacity >= 0.8){
            clearInterval(timer);
            return;
        }
        event.target.firstElementChild.style.opacity += 0.08;
    }, 5);
}

for (var i in sign) {
    gbx[i].addEventListener('mouseover', on, false);
}


function off3(){
	
	var timer = setInterval(frame,5);
	var opacity_value = 0.8;
	
		function frame(){
			
			if(sign[2].style.opacity <= 0){
				clearInterval(timer);
			}
			else{
				opacity_value -= 0.08 ;
				sign[2].style.opacity=opacity_value;
			}
			
		}
		
}	