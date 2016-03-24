// v1 - timer that rings after 5 minutes

//Variables: 

var startTime = 300; //start time in seconds 

//Functions:
$('#timeBox').html(timeConverter(startTime));

function start(){
	counter = setInterval(countDown, 1000);
	console.log(counter);
}
function stop(){
	clearInterval(counter);
}
function reset(){
	startTime = 300;
	$('#timeBox').html(timeConverter(startTime));
	clearInterval(counter);
}
function audio(){
	var audio = new Audio('gmadness.mp3');
    audio.play();
}
function countDown(){
	startTime = startTime - 1;
		if (startTime == 0) {
		audio();
		clearInterval(counter);
		}
}
function timeConverter(t){

    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  
}

// //Main Processes:		
// 		OnButtonClickStart setInterval(call audio function, in 5 minutes) AND call start function
// 		OnButtonClickStop pause time
window.onload = function(){
  $('#start').on('click', start);
  $('#stop').on('click', stop);
  $('#reset').on('click', reset);
};

