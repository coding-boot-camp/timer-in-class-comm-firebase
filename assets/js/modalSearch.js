var dataRef = new Firebase('https://funbreak.firebaseIO.com');

var baseURL = 'https://api.spotify.com/v1/search?q=';

var name = "";
var track = "";
var winningAudio = [];

function makeRequest(songValue){
	var queryURL = baseURL + songValue + '&type=track';

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		for (var i = 0; i < response.tracks.items.length; i++) {
			// console.log(response.tracks.items[i]);
			// console.log(response.tracks.items[i].artists[0].name);
			// console.log(response.tracks.items[i].name)
			// console.log(response.tracks.items[i].preview_url);
			$('#songSearchResults').append('<h2>Artist: ' + response.tracks.items[i].artists[0].name + '</h2>');
			$('#songSearchResults').append('<button class="modalSearch" data-song="' + response.tracks.items[i].preview_url + '">' + response.tracks.items[i].name + '</button>');
			$('#songSearchResults').append('<audio controls>' + '<source src=' + response.tracks.items[i].preview_url + '>' + '</audio>');
		}

		//Capture a value when item clicked
		$(".modalSearch").on("click", function(){
		alert('this modal has been clicked');
		console.log(this);
		var searchSend = $(this).data();
		var searchJSON = (searchSend.song);
		winningAudio.push(searchJSON);
		randomAudioWin();
		
})
		});
	}

// Search click: firebase data push/API call
$("#sendForm").on("click", function() {

	name = $('#studentName').val().trim();
	track = $('#trackName').val().trim();

	// var songValue = $('#trackName').val().replace(' ', '').trim();

	dataRef.push({
		name: name,
		track: track,
		dateAdded: Firebase.ServerValue.TIMESTAMP
	})
});
$("#apiCall").on("click", function(){

	$('#songSearchResults').empty();

	songValue = $('#trackName').val().replace(' ', '').trim();
	makeRequest(songValue);

	return false;
})	


dataRef.on("child_added", function(childSnapshot) {
	var trackAudioName = childSnapshot.val().track

		// Items appended to well		
		$('#songRequest').append("<div class='well'><span id='name'> "+childSnapshot.val().name+" just requested </span><span id='email'> "+childSnapshot.val().track+" </span></div>")

}, function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});


function randomAudioWin(){
	for(var i = 0; i < winningAudio.length;i++){
		var lotteryNumber = (Math.floor(Math.random() * (winningAudio.length) + 1));
		if (lotteryNumber == i) {
			var winAudio = winningAudio[i]
		} 
	}
	return winAudio
}









