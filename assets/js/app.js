// v1 - timer that rings after 5 minutes

var winningAudio = [];
var winAudio = '';
var startTime = 300; //start time in seconds 
var startTime = 3;
var query = 'https://funbreak.firebaseio.com/preview_url.json';
var song = '';

	function callToFireBase() {
		$.ajax({url: query, method: 'GET'}).done(function(response){
			// console.log('here is the preview_url json');
			for (var prop in response) {
				var urlResponse = response[prop].preview_url;
				// console.log(urlResponse);
				winningAudio.push(urlResponse);
			} 
			for(var i = 0; i < winningAudio.length; i++){
				var lotteryNumber = (Math.floor(Math.random() * (winningAudio.length) + 1));
				if (lotteryNumber == i) {
					winAudio = winningAudio[i]
				} 
			}
			winAudio;
			song = new Audio(winAudio);
			audio(song);
			});
	}	
	function start(){
		counter = setInterval(countDown, 1000);
		var currentTime = (timeConverter(startTime));
		$('#timeBox').html(currentTime);
	}
	function stop(){
		clearInterval(counter);
	}
	function reset(){
		startTime = 300;
		startTime = 3;
		clearInterval(counter);
		$('#timeBox').html(timeConverter(startTime));
		stopAudio(song);
	}
	function audio(song){
	    song.play();
	}
	function stopAudio(){
		song.pause();
	}
	function randomAudioWin(){
		for(var i = 0; i < winningAudio.length; i++){
			var lotteryNumber = (Math.floor(Math.random() * (winningAudio.length) + 1));
			if (lotteryNumber == i) {
				winAudio = winningAudio[i]
			} 
		}
		winAudio;
		song = new Audio(winAudio);
	}
	function countDown(){
		startTime = startTime - 1;
			if (startTime == 0) {
			callToFireBase();
			// randomAudioWin();
			// audio();
			clearInterval(counter);
			}
		$('#timeBox').html(timeConverter(startTime));
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

	
	
window.onload = function(){
	$('#start').on('click', start);
	$('#stop').on('click', stop);
	$('#reset').on('click', reset);
}














